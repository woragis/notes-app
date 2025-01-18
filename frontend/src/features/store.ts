import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "./notes/slice";

const store = configureStore({
  reducer: notesReducer,
});

export default store;
export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
