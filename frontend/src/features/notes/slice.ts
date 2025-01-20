import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NoteInterface } from "../../types/note.types";
import { NotesSliceState } from "../../types/redux.types";
import * as thunk from "./thunks";

const getNotes: () => NoteInterface[] = (): NoteInterface[] => {
  const notes = localStorage.getItem("notes");
  if (notes) {
    return JSON.parse(notes) as NoteInterface[];
  } else {
    return [] as NoteInterface[];
  }
};

const notesSlice = createSlice({
  name: "notes",
  initialState: { notes: getNotes(), note: undefined } as NotesSliceState,
  reducers: {
    getNote: (state, action: PayloadAction<NoteInterface["id"]>) => {
      state.note = state.notes.find((note) => note.id === action.payload);
    },
  },
  extraReducers: (builder) => {
    builder

      // Fetch notes
      .addCase(thunk.getNotesThunk.fulfilled, (state, action) => {
        state.notes = action.payload.data;
        localStorage.setItem("notes", JSON.stringify(state.notes));
      })

      // Get note and add to redux storage
      .addCase(thunk.getNoteByIdThunk.fulfilled, (state, action) => {
        state.notes.push(action.payload.data);
        localStorage.setItem("notes", JSON.stringify(state.notes));
      })

      // create note and add to redux storage
      .addCase(thunk.createNoteThunk.fulfilled, (state, action) => {
        state.notes.push(action.payload.data);
        state.note = action.payload.data;
        localStorage.setItem("notes", JSON.stringify(state.notes));
      })

      // update note and update on redux storage
      .addCase(thunk.updateNoteThunk.fulfilled, (state, action) => {
        // remove note from redux storage
        state.notes = state.notes.filter(
          (note) => note.id != action.payload.noteId
        );

        // add updated note on redux storage
        state.notes.push(action.payload.response.data);
        localStorage.setItem("notes", JSON.stringify(state.notes));
      })

      // remove deleted note from redux storage
      .addCase(thunk.deleteNoteThunk.fulfilled, (state, action) => {
        state.notes = state.notes.filter(
          (note) => note.id != action.payload.noteId
        );
        localStorage.setItem("notes", JSON.stringify(state.notes));
      });
  },
});

export const { getNote } = notesSlice.actions;
export default notesSlice.reducer;
