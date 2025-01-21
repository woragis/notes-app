import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NoteInterface } from "../../types/note.types";
import { NotesSliceState } from "../../types/redux.types";
import * as thunk from "./thunks";

const notesSlice = createSlice({
  name: "notes",
  initialState: {
    notes: [] as NoteInterface[],
    note: {} as NoteInterface,
  } as NotesSliceState,
  reducers: {
    getNote: (state, action: PayloadAction<NoteInterface["id"]>) => {
      let note = state.notes.find((note) => note.id === action.payload);
      if (note) state.note = note;
    },
  },
  extraReducers: (builder) => {
    builder

      // Fetch notes
      .addCase(thunk.getNotesThunk.fulfilled, (state, action) => {
        state.notes = action.payload.data;
        // toastify action.payload.error
      })

      // Get note and add to redux storage
      .addCase(thunk.getNoteByIdThunk.fulfilled, (state, action) => {
        state.notes.push(action.payload.data);
        state.note = action.payload.data;
      })

      // create note and add to redux storage
      .addCase(thunk.createNoteThunk.fulfilled, (state, action) => {
        state.notes.push(action.payload.data);
        state.note = action.payload.data;
      })

      // update note and update on redux storage
      .addCase(thunk.updateNoteThunk.fulfilled, (state, action) => {
        const index = state.notes.findIndex(
          (note) => note.id === action.payload.response.data.id
        );

        state.notes[index] = action.payload.response.data;
        state.note = state.notes[index];
      })

      // remove deleted note from redux storage
      .addCase(thunk.deleteNoteThunk.fulfilled, (state, action) => {
        state.notes = state.notes.filter(
          (note) => note.id != action.payload.noteId
        );
        state.note = {} as NoteInterface;
      });
  },
});

export const { getNote } = notesSlice.actions;
export default notesSlice.reducer;
