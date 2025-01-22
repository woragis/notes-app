import { NoteInterface } from "../../types/note.types";
import {
  DeleteResponse,
  NoteResponse,
  NotesResponse,
} from "../../types/response.types";
import { axiosInstance } from "../axios";

export const getNotesService = async () => {
  const response = await axiosInstance.get<NotesResponse>("notes/");
  return response.data;
};

export const getNoteByIdService = async (noteId: NoteInterface["id"]) => {
  const response = await axiosInstance.get<NoteResponse>(`notes/${noteId}`);
  return response.data;
};

export const createNoteService = async (note: NoteInterface) => {
  const response = await axiosInstance.post<NoteResponse>("notes/", note);
  return response.data;
};

export const updateNoteService = async (note: NoteInterface) => {
  const response = await axiosInstance.put<NoteResponse>(
    `notes/${note["id"]}`,
    note
  );
  return response.data;
};

export const deleteNoteService = async (noteId: NoteInterface["id"]) => {
  const response = await axiosInstance.delete<DeleteResponse>(
    `notes/${noteId}`
  );
  return response.data;
};
