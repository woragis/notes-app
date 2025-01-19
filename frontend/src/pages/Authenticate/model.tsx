import { ChangeEvent, FormEvent, useState } from "react";
import { LoginInterface, RegisterInterface } from "../../types/user.types";

export const useAuthenticateModel = () => {
  const [newUser, setNewUser] = useState<RegisterInterface>(
    {} as RegisterInterface
  );
  const handleRegisterChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewUser(
      (state) => (state = { ...state, [event.target.id]: event.target.value })
    );
  };
  const registerUser = (event: FormEvent) => {
    event.preventDefault();
  };

  const [user, setUser] = useState<LoginInterface>({} as LoginInterface);
  const handleLoginChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUser(
      (user) => (user = { ...user, [event.target.id]: event.target.value })
    );
  };
  const loginUser = (event: FormEvent) => {
    event.preventDefault();
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
