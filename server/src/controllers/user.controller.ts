import { RequestHandler, Request, Response } from "express";
import { validationResult } from "express-validator";
import { validationErrorResponse } from "./utils";
import bcrypt from "bcryptjs";
import passport from "passport";
import mongoose from "mongoose";
import UserDocument from "../models/User/IUserDocument";
import UserCollection from "../models/User/UserCollection";
import nodemailer from "nodemailer";
import sendgridTransport from "nodemailer-sendgrid-transport";
import crypto from "crypto";

// interface ExtendedAuthStatsAttachedRequest extends Request {
//   user: UserDocument;
//   }

export const getUser: RequestHandler = async (req: any, res: Response) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(422).json({ errors: errors.array() });
    return;
  }

  console.log("user:" + req.user);
  const user = req.user as UserDocument;
  // console.log( "id:" + user.id);
  try {
    let user_data;
    if (!!user._id) {
      user_data = await UserCollection.findOne({
        _id: user._id,
      }).lean();
    }
    if (!!user_data) {
      user_data.password = "";
    }
    res.status(200).json(user);
  } catch (e) {
    console.log(e.message);
    res.status(400).json({
      error: e.message,
    });
  }
};

const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key: process.env.SENDGRID_API,
    },
  })
);

export const forgotPassword: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(422).json({ errors: errors.array() });
    return;
  }

  crypto.randomBytes(32, async (err, buffer) => {
    if (err) {
      console.log(err);
    }
    const token = buffer.toString("hex");
    await UserCollection.findOne({ email: req.body.email }).then((user) => {
      if (!user) {
        return res
          .status(422)
          .json({ error: "User with that email doesn't exist." });
      }
      user.resetToken = token;
      const now = new Date();
      user.expireToken = new Date(now.getTime() + 900000);
      user.save().then((result) => {
        transporter.sendMail({
          to: user.email,
          from: "no-reply@securenotes.com",
          subject: "Password Reset",
          html: `
            <p>You requested for a password reset. If it was not you, feel free to ignore this mail.</p>
            <h5>Click on this <a href="http://localhost:3000/new-password/${token}">link</a>to reset your password.</h5>
            `,
        });
        res.json({ message: "Check your email." });
      });
    });
  });
};

export const newPassword: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(422).json({ errors: errors.array() });
    return;
  }

  const updatedPassword = req.body.password;
  const receivedToken = req.body.token;
  const now = new Date();
  await UserCollection.findOne({
    resetToken: receivedToken,
    expireToken: { $gt: now },
  }).then((user) => {
    if (!user) {
      return res.status(422).json({ error: "Try again after some time." });
    }
    new Promise((resolve, reject) => {
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(updatedPassword, salt, (err, hashedPassword) => {
          if (err) throw err;
          user.password = hashedPassword;
          user.resetToken = "";
          user.expireToken = new Date(0);
          user.save().then((savedUser) => {
            passport.authenticate("local")(req, res, function () {
              res.end();
              return res
                .status(200)
                .json({ message: "Password updated successfully." });
            });
          });
        });
      });
    }).catch((err) => {
      return res.status(400).json(err);
    });
  });
};

export const logout: RequestHandler = async (
  req: Request,

  res: Response
) => {
  req.session.destroy((err) => {
    res.redirect("/");
  });
  req.logout();
};

// UserCollection.createStrategy();

//Register User locally
export const signUp: RequestHandler = async (req: Request, res: Response) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(422).json({ errors: errors.array() });
    return;
  }
  if (req) {
    new Promise((resolve, reject) => {
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(req.body.password, salt, (err, hash) => {
          if (err) throw err;
          const user = new UserCollection({
            name: req.body.name,
            email: req.body.email,
            password: hash,
          });
          user
            .save()
            .then(() => {
              console.log(user + "saved");
              passport.authenticate("local")(req, res, function () {
                res.end();
                return res.status(200).json("Saved");
              });
            })
            .catch((err) => {
              return res.status(400).json(err);
            });
        });
      });
    });
  } else {
    res.status(500).json("Error");
  }
};

//Login User locally
export const signIn: RequestHandler = async (req: Request, res: Response) => {
  if (req) {
    if (!req.body.email) {
      return res.status(422).json({
        errors: {
          email: "is required",
        },
      });
    }

    if (!req.body.password) {
      return res.status(422).json({
        errors: {
          password: "is required",
        },
      });
    }
    const new_user = new UserCollection({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    req.login(new_user, function (err) {
      if (err) {
        console.log(err);
      } else {
        passport.authenticate("local")(req, res, function () {
          res.end();
          res.status(200).json("Logged in");
        });
      }
    });
  }
};

//Delete user
export const deleteUser: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const isUser: boolean = await UserCollection.exists(
    mongoose.Types.ObjectId(req.params.id)
  );
  if (!isUser) {
    return res.status(404).json({ error: "No user found" });
  }

  UserCollection.findByIdAndDelete(req.params.id)
    .exec()
    .then(() => {
      return res.status(200).json({ message: "User successfully deleted!" });
    })
    .catch((error) => res.status(500).json({ error: error.message }));
};
