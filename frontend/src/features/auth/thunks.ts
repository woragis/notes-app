import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginInterface, RegisterInterface } from "../../types/user.types";
import { loginService, registerService } from "../../api/services/auth";

export const registerThunk = createAsyncThunk(
  "authentication/register",
  async (user: RegisterInterface) => {
    return await registerService(user);
  }
);

export const loginThunk = createAsyncThunk(
  "authentication/login",
  async (user: LoginInterface) => {
    return await loginService(user);
  }
);
