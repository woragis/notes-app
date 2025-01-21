import { ChangeEvent, FormEvent, useState } from "react";
import {
  LoginUserInterface,
  RegisterUserRequest,
} from "../../types/user.types";
import { useAppDispatch, useAppSelector } from "../../features/hooks";
import { loginThunk, registerThunk } from "../../features/auth/thunks";
import { useNavigate } from "@tanstack/react-router";

export const useAuthenticateModel = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const authenticated = useAppSelector((state) => state.auth.authenticated);

  const [newUser, setNewUser] = useState<RegisterUserRequest>(
    {} as RegisterUserRequest
  );
  const [user, setUser] = useState<LoginUserInterface>(
    {} as LoginUserInterface
  );

  const handleRegisterChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewUser(
      (state) => (state = { ...state, [event.target.id]: event.target.value })
    );
  };
  const handleLoginChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUser(
      (user) => (user = { ...user, [event.target.id]: event.target.value })
    );
  };

  const registerUser = (event: FormEvent) => {
    event.preventDefault();

    dispatch(registerThunk(newUser))
      .unwrap()
      .then(() => {
        navigate({
          to: "/profile",
        });
      })
      .catch(() => {
        console.log("Display error with some dialog, problably toastify");
      });
  };

  const loginUser = (event: FormEvent) => {
    event.preventDefault();

    dispatch(loginThunk(user))
      .unwrap()
      .then(() => {
        navigate({
          to: "/profile",
        });
      })
      .catch(() => {
        console.log("Display error with some dialog, problably toastify");
      });
  };

  return {
    authenticated,
    newUser,
    user,
    handleRegisterChange,
    handleLoginChange,
    registerUser,
    loginUser,
  };
};
