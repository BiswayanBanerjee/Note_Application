// import express from "express";
// import { createNote, deleteNote } from "../controllers/noteController";
// import { authenticate } from "../middleware/authMiddleware";

// const router = express.Router();

// router.post("/", authenticate, createNote);
// router.delete("/:id", authenticate, deleteNote);

// export default router;

// import express from "express";
// import { createNote, deleteNote } from "../controllers/noteController";
// import { authenticate } from "../middleware/authMiddleware";

// const router = express.Router();

// router.post("/", authenticate, createNote); // Works because `authenticate` and `createNote` return void/Promise<void>
// router.delete("/:id", authenticate, deleteNote);

// export default router;

import express from "express";
import { createNote, deleteNote, viewNote, editNote, viewAllNotes } from "../controllers/noteController";
import { authenticate } from "../middleware/authMiddleware";

const router = express.Router();

router.post("/", authenticate, createNote);
router.delete("/:id", authenticate, deleteNote);
router.get("/:id", authenticate, viewNote); // Add route for viewing a note
router.put("/:id", authenticate, editNote); // Add route for editing a note
router.get("/", authenticate, viewAllNotes); // Add route for viewing all notes

export default router;
