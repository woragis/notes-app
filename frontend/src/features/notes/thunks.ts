import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  deleteNoteRemote,
  fetchNotes,
  getNoteRemote,
  postNoteRemote,
  putNoteRemote,
} from "../../api/services/notes";
import { NoteInterface } from "../../types/note.types";

export const getNotesThunk = createAsyncThunk("notes/fetch", async () => {
  return await fetchNotes();
});

export const getNoteByIdThunk = createAsyncThunk(
  "notes/getNote",
  async (noteId: NoteInterface["id"]) => {
    return await getNoteRemote(noteId);
  }
);

export const createNoteThunk = createAsyncThunk(
  "notes/create",
  async (note: NoteInterface) => {
    return await postNoteRemote(note);
  }
);

export const updateNoteThunk = createAsyncThunk(
  "notes/update",
  async (note: NoteInterface) => {
    const response = await putNoteRemote(note);
    return { noteId: note["id"], response };
  }
);

export const deleteNoteThunk = createAsyncThunk(
  "notes/delete",
  async (noteId: NoteInterface["id"]) => {
    const response = await deleteNoteRemote(noteId);
    return { noteId, response };
  }
);
