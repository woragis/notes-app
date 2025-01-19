import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  LoginUserInterface,
  RegisterUserRequest,
} from "../../types/user.types";
import { loginService, registerService } from "../../api/services/auth";

export const registerThunk = createAsyncThunk(
  "authentication/register",
  async (user: RegisterUserRequest) => {
    return await registerService(user);
  }
);

export const loginThunk = createAsyncThunk(
  "authentication/login",
  async (user: LoginUserInterface) => {
    return await loginService(user);
  }
);
