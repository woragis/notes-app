import { AuthResponse } from "../../types/response.types";
import { LoginInterface, RegisterInterface } from "../../types/user.types";
import { axiosInstance } from "../axios";

export const registerService = async (user: RegisterInterface) => {
  const response = await axiosInstance.post<AuthResponse>(
    "auth/register",
    user
  );
  return response.data;
};

export const loginService = async (user: LoginInterface) => {
  const response = await axiosInstance.post<AuthResponse>("auth/login", user);
  return response.data;
};
