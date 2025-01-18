import { NoteInterface } from "../../types/note.types";
import { axiosInstance } from "../axios";

export const fetchNotes = async () => {
  const response = await axiosInstance.get("notes/");
  const data = await response.data;
  return data;
};

export const fetchNote = async (noteId: number) => {
  const response = await axiosInstance.get(`notes/${noteId}`);
  const data = await response.data;
  return data;
};

export const postNote = async (note: NoteInterface) => {
  const response = await axiosInstance.post("notes/", note);
  const data = await response.data;
  return data;
};

export const putNote = async (note: NoteInterface) => {
  const response = await axiosInstance.put(`notes/${note["id"]}`, note);
  const data = await response.data;
  return data;
};

export const deleteNote = async (noteId: number) => {
  const response = await axiosInstance.delete(`notes/${noteId}`);
  const data = await response.data;
  return data;
};
