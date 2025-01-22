import { UUID } from "./utils.types";

export interface LoginUserInterface {
  email: string;
  password: string;
}

export interface RegisterUserRequest extends LoginUserInterface {
  name: string;
}

export interface User extends RegisterUserRequest {
  id: UUID;
  createdAt: string;
  updatedAt: string;
}
