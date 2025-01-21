export interface LoginUserInterface {
  email: string;
  password: string;
}

export interface RegisterUserRequest extends LoginUserInterface {
  name: string;
}

export interface User extends RegisterUserRequest {
  id: number;
  createdAt: string;
  updatedAt: string;
}
