
import { RequestHandler, Request, Response } from "express";
import { validationResult } from "express-validator";
import { validationErrorResponse } from "./utils";
import mongoose from "mongoose";
import NoteDocument from "../models/Notes/INotesDocument";
import NotesCollection from "../models/Notes/NotesCollection";

export const getNotes: RequestHandler = async (
  _req: Request,
  res: Response
) => {
  NotesCollection.find()
    .exec()
    .then((notes: NoteDocument[] | null) => {
      res.status(200).json(notes);
    })

    .catch((error) => {
      return res.status(500).json({ error: error.message });
    });
};

export const getNote: RequestHandler = async (req: Request, res: Response) => {
  const isNote: boolean = await NotesCollection.exists(
    mongoose.Types.ObjectId(req.params.id)
  );
  if (!isNote) {
    return res.status(404).json({ error: "No Note found" });
  }
  NotesCollection.findById(req.params.id)
    .exec()
    .then((notes: NoteDocument | null) => {
      res.status(200).json(notes);
    })
    .catch((error) => {
      return res.status(500).json({ error: error.message });
    });
};

export const createNote: RequestHandler = (req: Request, res: Response) => {
  const invalid: Response | false = validationErrorResponse(
    res,
    validationResult(req)
  );

  if (invalid) {
    return invalid;
  }

  const note: NoteDocument = new NotesCollection({
    title: req.body.title,
    content: req.body.content,
  });

  note
    .save()
    // eslint-disable-next-line
    .then((saved: any | null) => {
      return res.status(200).json(saved);
    })

    .catch((error) => {
      return res.status(500).json({ error: error.message });
    });
};

export const updateNote: RequestHandler = async (
  req: Request,
  res: Response
) => {

  const invalid: Response | false = validationErrorResponse(
    res,
    validationResult(req)
  );
  if (invalid) {
    return invalid;
  }
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res
      .status(404)
      .json({ error: `No notes with id: ${req.params.id}` });
  }
  NotesCollection.findByIdAndUpdate(
    req.params.id,
    {
      title: req.body.title,
      content: req.body.content,
    },
    { new: true }
  )
    .exec()
    .then((newNote: NoteDocument | null) => res.status(201).json(newNote))
    .catch((error) => res.status(500).json({ error: error.message }));
};

export const deleteNote: RequestHandler = async (
  req: Request,

  res: Response
) => {
  const isNote: boolean = await NotesCollection.exists(
    mongoose.Types.ObjectId(req.params.id)
  );
  if (!isNote) {
    return res.status(404).json({ error: "No Note found" });
  }

  NotesCollection.findByIdAndDelete(req.params.id)
    .exec()
    .then(() => {
      return res.status(200).json({ message: "Note successfully deleted!" });
    })
    .catch((error) => res.status(500).json({ error: error.message }));
};
