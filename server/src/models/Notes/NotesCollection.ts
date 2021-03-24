import mongoose, { Model, Schema } from "mongoose";

import NotesDocument from "./INotesDocument";

export const noteSchema: Schema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String },
});

const NotesCollection: Model<NotesDocument> = mongoose.model(
  "Note",
  noteSchema
);
export default NotesCollection;
