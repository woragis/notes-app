import { ChangeEvent, FormEvent, useState } from "react";
import {
  LoginUserInterface,
  RegisterUserRequest,
} from "../../types/user.types";
import { useAppDispatch } from "../../features/hooks";
import { loginThunk, registerThunk } from "../../features/auth/thunks";

export const useAuthenticateModel = () => {
  const dispatch = useAppDispatch();

  const [newUser, setNewUser] = useState<RegisterUserRequest>(
    {} as RegisterUserRequest
  );
  const handleRegisterChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewUser(
      (state) => (state = { ...state, [event.target.id]: event.target.value })
    );
  };
  const registerUser = (event: FormEvent) => {
    event.preventDefault();
    dispatch(registerThunk(newUser));
  };

  const [user, setUser] = useState<LoginUserInterface>(
    {} as LoginUserInterface
  );
  const handleLoginChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUser(
      (user) => (user = { ...user, [event.target.id]: event.target.value })
    );
  };
  const loginUser = (event: FormEvent) => {
    event.preventDefault();
    dispatch(loginThunk(user));
  };

  return {
    newUser,
    handleRegisterChange,
    registerUser,
    user,
    handleLoginChange,
    loginUser,
  };
};
