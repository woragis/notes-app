import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NoteInterface } from "../../types/note.types";
import { NotesSliceState } from "../../types/redux.types";
import * as thunk from "./thunks";

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
    createNote: (state, action: PayloadAction<NoteInterface>) => {
      state.notes.push(action.payload);
    },
    updateNote: (state, action: PayloadAction<NoteInterface>) => {
      state.notes.push(action.payload);
    },
    deleteNote: (state, action: PayloadAction<NoteInterface["id"]>) => {
      state.notes = state.notes.filter((note) => note.id != action.payload);
    },
  },
  extraReducers: (builder) => {
    // Fetch notes
    builder.addCase(thunk.getNotesThunk.fulfilled, (state, action) => {
      state.notes = action.payload.data;
    });

    // Get note and add to redux storage
    builder.addCase(thunk.getNoteByIdThunk.fulfilled, (state, action) => {
      state.notes.push(action.payload.data);
    });

    // create note and add to redux storage
    builder.addCase(thunk.createNoteThunk.fulfilled, (state, action) => {
      state.notes.push(action.payload.data);
    });

    // update note and update on redux storage
    builder.addCase(thunk.updateNoteThunk.fulfilled, (state, action) => {
      // remove note from redux storage
      state.notes = state.notes.filter(
        (note) => note.id != action.payload.noteId
      );

      // add updated note on redux storage
      state.notes.push(action.payload.response.data);
    });

    // remove deleted note from redux storage
    builder.addCase(thunk.deleteNoteThunk.fulfilled, (state, action) => {
      state.notes = state.notes.filter(
        (note) => note.id != action.payload.noteId
      );
    });
  },
});

export const { setNotes, getNote, createNote, updateNote, deleteNote } =
  notesSlice.actions;
export default notesSlice.reducer;
