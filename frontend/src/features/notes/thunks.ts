import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  deleteNoteService,
  getNotesService,
  getNoteByIdService,
  createNoteService,
  updateNoteService,
} from "../../api/services/notes";
import { NoteInterface } from "../../types/note.types";
import { useQuery } from "@tanstack/react-query";
import { NotesResponse } from "../../types/response.types";

export const getNotesThunk = createAsyncThunk("notes/fetch", async () => {
  // const cachedData = localStorage.getItem("notes");
  // if (cachedData) return JSON.parse(cachedData);
  // console.log("trying to fetch with redux thunk");
  const { data, isLoading } = useQuery<NotesResponse>({
    queryKey: ["notes"],
    queryFn: getNotesService,
  });
  while (isLoading) {
    setTimeout(() => {}, 500);
    console.log("still loading");
  }
  console.log("successfully fetched with useQuery");
  if (data) return data;
  else return {} as NotesResponse;
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
