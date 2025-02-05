import { createSlice } from "@reduxjs/toolkit";
import * as thunk from "./thunks";
import { User } from "../../types/user.types";
import Cookies from "js-cookie";
import { AuthSliceState } from "../../types/redux.types";
import { toast } from "react-toastify";
import { setCookie } from "../../utils/cookies";

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
  initialState: { user, authenticated: true ? user : false } as AuthSliceState,
  reducers: {
    logout: (state) => {
      state.authenticated = false;
      state.user = {} as User;
      Cookies.remove("user");
      Cookies.remove("token");
      toast.success("Successfully logged out");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(thunk.registerThunk.fulfilled, (state, action) => {
        state.authenticated = true;
        state.user = action.payload.data.user;
        setCookie("user", JSON.stringify(action.payload.data.user), 7, "lax");
        setCookie("token", JSON.stringify(action.payload.data.token), 7, "lax");
        toast.success("Successfully logged in");
      })
      .addCase(thunk.loginThunk.fulfilled, (state, action) => {
        state.authenticated = true;
        state.user = action.payload.data.user;
        setCookie("user", JSON.stringify(action.payload.data.user), 7, "lax");
        setCookie("token", JSON.stringify(action.payload.data.token), 7, "lax");
        toast.success("Successfully logged in");
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
