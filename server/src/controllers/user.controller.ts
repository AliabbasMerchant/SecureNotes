import { RequestHandler, Request, Response } from "express";
import { validationResult } from "express-validator";
import { validationErrorResponse } from "./utils";
import bcrypt from 'bcryptjs';
import passport from "passport";
import mongoose from "mongoose";
import UserDocument from "../models/User/IUserDocument";
import UserCollection from "../models/User/UserCollection";

// interface ExtendedAuthStatsAttachedRequest extends Request {
//   user: UserDocument;
//   }

export const getUser: RequestHandler = async (
  req: any,
  res: Response
) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(422).json({ errors: errors.array() });
      return;
    }
    
    console.log("user:"+req.user);
    const user = req.user as UserDocument ;
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

export const forgotPassword: RequestHandler = async (
  req: Request,

  res: Response
) => {
  
};

export const newPassword: RequestHandler = async (
    req: Request,
  
    res: Response
  ) => {
    
  };

export const logout: RequestHandler = async (
    req: Request,
  
    res: Response
  ) => {
  req.session.destroy(()=>{});
  req.logout();
};




  // UserCollection.createStrategy();


//Register User locally
export const signUp: RequestHandler = async( req:Request , res:Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(422).json({ errors: errors.array() });
      return;
    }
    if(req){
                  
        new Promise((resolve , reject)=> {

          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(req.body.password, salt, (err, hash) => {
              if (err) throw err;
              const user = new UserCollection({
                name: req.body.name, 
                email: req.body.email,
                password: hash
              });
              user.save()
              .then(() => {
                console.log(user+"saved");
                  passport.authenticate("local")(req , res , function(){
                    res.end();
                      return res.status(200).json("Saved");
                  });
              })
              .catch((err) => {return res.status(400).json(err);});
            });
          });
            
        });
        
    }
    else{
        res.status(500).json("Error");            
    }
};

//Login User locally
export const signIn: RequestHandler = async(req:Request , res:Response) =>
{
    if(req){
      if(!req.body.email) {
        return res.status(422).json({
          errors: {
            email: 'is required',
          },
        });
      }
    
      if(!req.body.password) {
        return res.status(422).json({
          errors: {
            password: 'is required',
          },
        });
      }
        const new_user = new UserCollection({
            name: req.body.name, 
            email: req.body.email,
            password: req.body.password
        });
        req.login(new_user , function(err){
            if(err){
              console.log(err);
            }
            else{
              passport.authenticate("local")(req , res , function(){
                res.end();
                res.status(200).json("Logged in");
              });
            }
    })
}
};

// //Update user
// export const updateUser: RequestHandler = async(req:Request , res:Response) =>
// {
//     const user = await User.findById(req.params.id);

//     if(!user){
//         return res.status(404).json({error: "No user found"});
//     }


// }


//Delete user
export const deleteUser: RequestHandler = async(req:Request , res:Response) =>
{
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
}
