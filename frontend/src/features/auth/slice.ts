import { createSlice } from "@reduxjs/toolkit";
import * as thunk from "./thunks";
import { User } from "../../types/user.types";
import Cookies from "js-cookie";
import { AuthState } from "../../types/redux.types";

const getUser: () => User | undefined = (): User | undefined => {
  const user = Cookies.get("user");
  if (user) {
    return JSON.parse(user) as User;
  } else {
    return undefined;
  }
};

const user = getUser();

const authSlice = createSlice({
  name: "auth",
  initialState: { user, authenticated: true ? user : false } as AuthState,
  reducers: {
    logout: (state) => {
      state.authenticated = false;
      state.user = {} as User;
      Cookies.remove("user");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(thunk.registerThunk.fulfilled, (state, action) => {
        state.authenticated = true;
        state.user = action.payload.data.user;
        Cookies.set("user", JSON.stringify(action.payload.data.user), {
          expires: 7,
          path: "/",
        });
      })
      .addCase(thunk.loginThunk.fulfilled, (state, action) => {
        state.authenticated = true;
        state.user = action.payload.data.user;
        Cookies.set("user", JSON.stringify(action.payload.data.user), {
          expires: 7,
          path: "/",
        });
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
