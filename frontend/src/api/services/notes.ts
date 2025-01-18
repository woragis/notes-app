import { NoteInterface } from "../../types/note.types";
import {
  DeleteResponse,
  NoteResponse,
  NotesResponse,
} from "../../types/response.types";
import { axiosInstance } from "../axios";

export const fetchNotes = async () => {
  const response = await axiosInstance.get<NotesResponse>("notes/");
  const data = response.data;
  return data;
};

export const fetchNote = async (noteId: number) => {
  const response = await axiosInstance.get<NoteResponse>(`notes/${noteId}`);
  const data = response.data;
  return data;
};

export const postNote = async (note: NoteInterface) => {
  const response = await axiosInstance.post<NoteResponse>("notes/", note);
  const data = response.data;
  return data;
};

export const putNote = async (note: NoteInterface) => {
  const response = await axiosInstance.put<NoteResponse>(
    `notes/${note["id"]}`,
    note
  );
  const data = response.data;
  return data;
};

export const deleteNote = async (noteId: number) => {
  const response = await axiosInstance.delete<DeleteResponse>(
    `notes/${noteId}`
  );
  const data = response.data;
  return data;
};
