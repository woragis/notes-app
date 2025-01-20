import { useQuery } from "@tanstack/react-query";
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

export const getNoteByIdService = async (noteId: number) => {
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

export const deleteNoteService = async (noteId: number) => {
  const response = await axiosInstance.delete<DeleteResponse>(
    `notes/${noteId}`
  );
  return response.data;
};

export const useNotes = () => {
  const response = useQuery({
    queryKey: ["notes"],
    queryFn: async () => {
      console.log("fetching notes with tanstack");
      const response = await getNotesService();
      console.log("fetched response:");
      console.log(response);
      return response;
    },
  });
  if (response) return response.data;
  else return {} as NotesResponse;
};
