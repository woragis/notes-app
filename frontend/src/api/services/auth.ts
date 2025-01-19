import { AuthResponse } from "../../types/response.types";
import { LoginInterface, RegisterInterface } from "../../types/user.types";
import { axiosInstance } from "../axios";

export const registerService = async (user: RegisterInterface) => {
  return await axiosInstance.post<AuthResponse>("/auth/register", user);
};

export const loginService = async (user: LoginInterface) => {
  return await axiosInstance.post<AuthResponse>("/auth/login", user);
};
