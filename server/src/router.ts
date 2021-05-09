import express from "express";
import passport from "passport";
import {
  getNotes,
  getNote,
  createNote,
  updateNote,
  deleteNote,
} from "./controllers/notes.controller";
import {
  signIn,
  signUp,
  getUser,
  logout,
  forgotPassword,
  newPassword,
} from "./controllers/user.controller";
import { isLoggedIn } from "./middleware/user";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "YO" });
});
//------------------------- Notes --------------------
// GET /notes -> Gets all notes.
router.get("/notes", isLoggedIn, getNotes);

// GET /notes/:id -> Gets a specific note.
router.get("/notes/:id", getNote);

// POST /notes -> Creates a new note.
router.post("/notes", createNote);

// PUT /notes/:id -> Edits a note with given ID.
router.put("/notes/:id", updateNote);

// DELETE /notes/:id -> Deletes a note with given ID
router.delete("/notes/:id", deleteNote);

//------------------------- Auth ------------------

// Auth
router.post("/signup", signUp);
router.post("/signin", signIn);
// router.post('/verify-token', verifyToken);
router.post("/user", getUser);
router.post("/forgot-password", forgotPassword);
router.post("/new-password/:token", newPassword);
router.get("/logout", logout);
router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
router.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "api/notes" }),
  (req, res) => {
    res.redirect("/api/signin");
  }
);
router.get(
  "/auth/github",
  passport.authenticate("github", { scope: ["profile", "email"] })
);
router.get(
  "/auth/gothub/callback",
  passport.authenticate("github", { failureRedirect: "api/notes" }),
  (req, res) => {
    res.redirect("/api/signin");
  }
);

export default router;
