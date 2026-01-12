import { Request, Response } from "express";
import { Note } from "../models/note";

export const createNote = async (req: Request, res: Response): Promise<void> => {
  const { title, content } = req.body;

  try {
    const user = (req as any).user; // Dynamically access req.user

    if (!user || !user.id) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }

    const note = new Note({
      userId: user.id,
      title,
      content,
    });

    await note.save();
    res.status(201).json({ message: "Note created successfully", note });
  } catch (error) {
    res.status(500).json({ message: "Error creating note", error: error instanceof Error ? error.message : error });
  }
};

export const deleteNote = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  try {
    const user = (req as any).user; // Dynamically access req.user

    if (!user || !user.id) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }

    const note = await Note.findOneAndDelete({ _id: id, userId: user.id });

    if (!note) {
      res.status(404).json({ message: "Note not found or you do not have permission to delete it" });
      return;
    }

    res.status(200).json({ message: "Note deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting note", error: error instanceof Error ? error.message : error });
  }
};

export const viewNote = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  try {
    const user = (req as any).user; // Dynamically access req.user

    if (!user || !user.id) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }

    const note = await Note.findOne({ _id: id, userId: user.id });

    if (!note) {
      res.status(404).json({ message: "Note not found or you do not have permission to view it" });
      return;
    }

    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({ message: "Error viewing note", error: error instanceof Error ? error.message : error });
  }
};

export const editNote = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const { title, content } = req.body;

  try {
    const user = (req as any).user; // Dynamically access req.user

    if (!user || !user.id) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }

    const note = await Note.findOneAndUpdate(
      { _id: id, userId: user.id },
      { title, content },
      { new: true }
    );

    if (!note) {
      res.status(404).json({ message: "Note not found or you do not have permission to edit it" });
      return;
    }

    res.status(200).json({ message: "Note updated successfully", note });
  } catch (error) {
    res.status(500).json({ message: "Error editing note", error: error instanceof Error ? error.message : error });
  }
};

export const viewAllNotes = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = (req as any).user; // Dynamically access req.user

    if (!user || !user.id) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }

    const notes = await Note.find({ userId: user.id });

    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving notes", error: error instanceof Error ? error.message : error });
  }
};