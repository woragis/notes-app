export interface LoginInterface {
  email: string;
  password: string;
}

export interface RegisterInterface extends LoginInterface {
  name: string;
}

export interface User extends RegisterInterface {
  createdAt: Date;
  updatedAt: Date;
}
