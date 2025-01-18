import { NoteInterface } from "./note.types";

interface DefaultResponse {
  message: string;
  status: number;
  data: any;
  error?: string;
}

export interface NotesResponse extends DefaultResponse {
  data: NoteInterface[];
}

export interface NoteResponse extends DefaultResponse {
  data: NoteInterface;
}

export interface DeleteResponse extends DefaultResponse {
  data: boolean;
}
