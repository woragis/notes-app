import { useProfileModel } from "./model";

export const ProfileView = ({
  authenticated,
  user,
}: ReturnType<typeof useProfileModel>) => {
  if (!authenticated) {
    return <h1>Not authenticated</h1>;
  } else {
    return <div>{user.name}</div>;
  }
};
