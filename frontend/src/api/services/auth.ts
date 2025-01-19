import { AuthResponse } from "../../types/response.types";
import {
  LoginUserInterface,
  RegisterUserRequest,
} from "../../types/user.types";
import { axiosInstance } from "../axios";

export const registerService = async (user: RegisterUserRequest) => {
  const response = await axiosInstance.post<AuthResponse>(
    "auth/register",
    user
  );
  return response.data;
};

export const loginService = async (user: LoginUserInterface) => {
  const response = await axiosInstance.post<AuthResponse>("auth/login", user);
  return response.data;
};
