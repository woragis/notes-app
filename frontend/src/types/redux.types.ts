import { NoteInterface } from "./note.types";
import { User } from "./user.types";

export interface NotesSliceState {
  notes: NoteInterface[];
  note: NoteInterface;
}

export interface AuthSliceState {
  user: User;
  authenticated: boolean;
}
