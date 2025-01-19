import { NoteInterface } from "./note.types";
import { User } from "./user.types";

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

export interface AuthResponse extends DefaultResponse {
  data: {
    token: string;
    user: User;
  };
}
