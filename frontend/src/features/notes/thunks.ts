import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  deleteNoteService,
  getNotesService,
  getNoteByIdService,
  createNoteService,
  updateNoteService,
} from "../../api/services/notes";
import { NoteInterface } from "../../types/note.types";

export const getNotesThunk = createAsyncThunk("notes/fetch", async () => {
  return await getNotesService();
});

export const getNoteByIdThunk = createAsyncThunk(
  "notes/getNote",
  async (noteId: NoteInterface["id"]) => {
    return await getNoteByIdService(noteId);
  }
);

export const createNoteThunk = createAsyncThunk(
  "notes/create",
  async (note: NoteInterface) => {
    return await createNoteService(note);
  }
);

export const updateNoteThunk = createAsyncThunk(
  "notes/update",
  async (note: NoteInterface) => {
    const response = await updateNoteService(note);
    return { noteId: note["id"], response };
  }
);

export const deleteNoteThunk = createAsyncThunk(
  "notes/delete",
  async (noteId: NoteInterface["id"]) => {
    const response = await deleteNoteService(noteId);
    return { noteId, response };
  }
);
