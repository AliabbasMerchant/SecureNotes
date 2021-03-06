import mongoose from "mongoose";
// eslint-disable-next-line
export default interface INotesDocument extends mongoose.Document {
  title: string;
  content: string;
}
