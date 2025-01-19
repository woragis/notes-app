import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "./notes/slice";
import authReducer from "./auth/slice";

const store = configureStore({
  reducer: {
    notes: notesReducer,
    auth: authReducer,
  },
});

export default store;
export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
