import { NoteInterface } from "./note.types";

export interface NotesSliceState {
  notes: NoteInterface[];
  note: NoteInterface | undefined;
}
