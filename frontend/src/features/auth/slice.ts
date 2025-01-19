import { createSlice } from "@reduxjs/toolkit";
import * as thunk from "./thunks";
import { User } from "../../types/user.types";

interface AuthState {
  user: User;
  authenticated: boolean;
}
const authSlice = createSlice({
  name: "auth",
  initialState: {} as AuthState,
  reducers: {
    logout: (state) => {
      state.authenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(thunk.registerThunk.fulfilled, (state, action) => {
        state.authenticated = true;
        state.user = action.payload.data.user;
      })
      .addCase(thunk.loginThunk.fulfilled, (state, action) => {
        state.authenticated = true;
        state.user = action.payload.data.user;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
