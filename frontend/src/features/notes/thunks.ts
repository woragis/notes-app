import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  deleteNoteService,
  getNoteByIdService,
  createNoteService,
  updateNoteService,
} from "../../api/services/notes";
import { NotesResponse, NoteResponse } from "../../types/response.types";

export const getNotesThunk = createAsyncThunk(
  "notes/fetch",
  async (data: NotesResponse) => {
    return data;
  }
);

export const getNoteByIdThunk = createAsyncThunk(
  "notes/getNote",
  async (noteId: NoteResponse["data"]["id"]) => {
    return await getNoteByIdService(noteId);
  }
);

export const createNoteThunk = createAsyncThunk(
  "notes/create",
  async (note: NoteResponse) => {
    return await createNoteService(note.data);
  }
);

export const updateNoteThunk = createAsyncThunk(
  "notes/update",
  async (note: NoteResponse) => {
    return await updateNoteService(note.data);
  }
);

export const deleteNoteThunk = createAsyncThunk(
  "notes/delete",
  async (noteId: NoteResponse["data"]["id"]) => {
    const response = await deleteNoteService(noteId);
    return { noteId, response };
  }
);
