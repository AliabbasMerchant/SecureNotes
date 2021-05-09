import mongoose from "mongoose";
// eslint-disable-next-line
export default interface IUserDocument extends mongoose.Document {
  name: string;
  email: string;
  password: string;
  resetToken: string;
  expireToken: Date;
}
