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

export const getNoteRemote = async (noteId: number) => {
  const response = await axiosInstance.get<NoteResponse>(`notes/${noteId}`);
  const data = response.data;
  return data;
};

export const postNoteRemote = async (note: NoteInterface) => {
  const response = await axiosInstance.post<NoteResponse>("notes/", note);
  const data = response.data;
  return data;
};

export const putNoteRemote = async (note: NoteInterface) => {
  const response = await axiosInstance.put<NoteResponse>(
    `notes/${note["id"]}`,
    note
  );
  const data = response.data;
  return data;
};

export const deleteNoteRemote = async (noteId: number) => {
  const response = await axiosInstance.delete<DeleteResponse>(
    `notes/${noteId}`
  );
  const data = response.data;
  return data;
};
