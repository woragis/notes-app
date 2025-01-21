import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  deleteNoteService,
  getNoteByIdService,
  createNoteService,
  updateNoteService,
} from "../../api/services/notes";
import { NotesResponse } from "../../types/response.types";
import { NoteInterface } from "../../types/note.types";

export const getNotesThunk = createAsyncThunk(
  "notes/fetch",
  async (data: NotesResponse) => {
    return data;
  }
);

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
    return await updateNoteService(note);
  }
);

export const deleteNoteThunk = createAsyncThunk(
  "notes/delete",
  async (noteId: NoteInterface["id"]) => {
    const response = await deleteNoteService(noteId);
    return { noteId, response };
  }
);
