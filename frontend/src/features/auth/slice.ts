import { createSlice } from "@reduxjs/toolkit";
import * as thunk from "./thunks";

interface UserInterface {
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}
interface AuthState {
  user: UserInterface;
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
        state.user = action.payload.data.data.user;
      })
      .addCase(thunk.loginThunk.fulfilled, (state, action) => {
        state.authenticated = true;
        state.user = action.payload.data.data.user;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
