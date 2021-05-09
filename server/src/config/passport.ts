import passport from "passport";
import GoogleStrategy from "passport-google-oauth";
import LocalStrategy from "passport-local";
import GithubStrategy from "passport-github";
import bcrypt from "bcryptjs";
import IUser from "../models/User/IUserDocument";
import User from "../models/User/UserCollection";
import { NativeError } from "mongoose";

function passportInit() {
  passport.serializeUser<any, any>((req, user, done) => {
    console.log("serailising user" + user);
    done(null, user);
  });

  passport.deserializeUser<any, any>((req, user, done) => {
    console.log("deserailising rec user" + user);
    console.log("deserailising rec user id" + user._id);

    User.findById(user._id, (err: NativeError, user_data: IUser) => {
      console.log("deserailising user_data" + user_data);
      done(err, user_data);
    });
  });

  passport.use(
    new LocalStrategy.Strategy(
      {
        usernameField: "email",
        passwordField: "password",
      },
      function (username: any, password: any, done: any) {
        User.findOne({ email: username }, function (err: any, user: any) {
          if (err) {
            return done(err);
          }
          if (!user) {
            console.log(user + "worng username");
            return done(null, false, { message: "Incorrect username." });
          }
          // Match password
          bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
              return done(null, user);
            } else {
              return done(null, false, { message: "Password incorrect" });
            }
          });
          return done(null, user);
        });
      }
    )
  );

  //Google Strategy
  passport.use(
    new GoogleStrategy.OAuthStrategy(
      {
        consumerKey: process.env.GOOGLE_CLIENT_ID || "",
        consumerSecret: process.env.GOOGLE_client_SECRET || "",
        callbackURL: "api/auth/google/callback",
      },
      function (token: any, tokenSecret: any, profile: any, done: any) {
        console.log(profile);
        User.findOne({ googleId: profile.id }).then((existingUser) => {
          if (existingUser) {
            done(null, existingUser);
          } else {
            new User({
              name: profile.displayName,
              email: profile.emails[0].value,
              // photo: profile.photos[0].value.split("?")[0]
            })
              .save()
              .then((user) => done(null, user));
          }
        });
      }
    )
  );
}

//Github Strategy
passport.use(
  new GithubStrategy.Strategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID || "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
      callbackURL: "api/auth/github/callback",
    },
    function (token: any, tokenSecret: any, profile: any, done: any) {
      console.log(profile);
      User.findOne({ githubId: profile.id }).then((existingUser) => {
        if (existingUser) {
          done(null, existingUser);
        } else {
          new User({
            name: profile.displayName,
            email: profile.emails[0].value,
          })
            .save()
            .then((user) => done(null, user));
        }
      });
    }
  )
);

export default passportInit;
