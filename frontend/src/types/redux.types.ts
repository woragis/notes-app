import { NoteInterface } from "./note.types";
import { User } from "./user.types";

export interface NotesSliceState {
  notes: NoteInterface[];
  note: NoteInterface | undefined;
}

export interface AuthSliceState {
  user: User;
  authenticated: boolean;
}
