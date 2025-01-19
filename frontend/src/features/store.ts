import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "./notes/slice";
import authReducer from "./auth/slice";
import messagesReducer from "./warnings/slice";

const store = configureStore({
  reducer: {
    notes: notesReducer,
    auth: authReducer,
    messages: messagesReducer,
  },
});

export default store;
export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
