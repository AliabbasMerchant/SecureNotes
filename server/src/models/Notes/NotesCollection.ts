import mongoose, { Model, Schema } from "mongoose";

import NotesDocument from "./NotesDocument";

export const noteSchema: Schema = new mongoose.Schema({
  title: String,
  content: String,
});

const NotesCollection: Model<NotesDocument> = mongoose.model(
  "Note",
  noteSchema
);
export default NotesCollection;
