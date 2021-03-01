import express from "express";

import {
  getNotes,
  getNote,
  createNote,
  updateNote,
  deleteNote,
} from "./controllers/notes.controller";
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "YO" });
});

// GET /notes -> Gets all notes.
router.get("/notes", getNotes);

// GET /notes/:id -> Gets a specific note.
router.get("/notes/:id", getNote);

// POST /notes -> Creates a new note.
router.post("/notes", createNote);

// PUT /notes/:id -> Edits a note with given ID.
router.put("/notes/:id", updateNote);

// DELETE /notes/:id -> Deletes a note with given ID
router.delete("/notes/:id", deleteNote);

export default router;
