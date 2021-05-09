import mongoose, { Model, Schema } from "mongoose";
import UserDocument from "./IUserDocument";
// import passportLocalMongoose from "passport-local-mongoose";

export const userSchema: Schema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  resetToken: String,
  expireToken: Date,
});

// userSchema.plugin(passportLocalMongoose);
// userSchema.plugin(findOrCreate);

const UserCollection: Model<UserDocument> = mongoose.model("User", userSchema);
export default UserCollection;
