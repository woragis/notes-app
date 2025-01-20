import { useAppSelector } from "../../features/hooks";

export const useProfileModel = () => {
  const auth = useAppSelector((state) => state.auth);

  const authenticated = auth.authenticated;
  const user = auth.user;

  return { authenticated, user };
};
