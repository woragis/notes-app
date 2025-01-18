import { configureStore, createSlice } from "@reduxjs/toolkit";
import { NoteInterface } from "../types/note.types";

interface StoreState {
  notes: NoteInterface[];
}

const notesSlice = createSlice({
  name: "notes",
  initialState: {} as StoreState,
  reducers: {
    getNote: () => {},
    getNotes: () => {},
    createNotes: () => {},
    updateNotes: () => {},
    deleteNote: () => {},
  },
});

const notesReducer = notesSlice.reducer;

const store = configureStore({
  reducer: notesReducer,
});

export default store;
export type AppRootState = typeof store;
