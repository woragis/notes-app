import { createSlice } from "@reduxjs/toolkit";

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
    login: (state) => {
      state.authenticated = true;
    },
    register: (state) => {
      state.authenticated = true;
    },
    logout: (state) => {
      state.authenticated = false;
    },
  },
});

export const { login, register, logout } = authSlice.actions;
export default authSlice.reducer;
