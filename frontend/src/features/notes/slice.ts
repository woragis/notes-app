import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NoteInterface } from "../../types/note.types";
import { NotesSliceState } from "../../types/redux.types";

const notesSlice = createSlice({
  name: "notes",
  initialState: { notes: [], note: undefined } as NotesSliceState,
  reducers: {
    setNotes: (state, action: PayloadAction<NoteInterface[]>) => {
      state.notes = action.payload;
    },
    getNote: (state, action: PayloadAction<NoteInterface["id"]>) => {
      state.note = state.notes.find((note) => note.id === action.payload);
    },
    createNotes: (state, action: PayloadAction<NoteInterface>) => {
      state.notes.push(action.payload);
    },
    updateNotes: (state, action: PayloadAction<NoteInterface>) => {
      state.notes.push(action.payload);
    },
    deleteNote: (state, action: PayloadAction<NoteInterface["id"]>) => {
      state.notes = state.notes.filter((note) => note.id != action.payload);
    },
  },
});

export const { setNotes, getNote, createNotes, updateNotes, deleteNote } =
  notesSlice.actions;
export default notesSlice.reducer;
