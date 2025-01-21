import { toast } from "react-toastify";
import { AuthLink, AuthWarning } from "../../components/ui/AuthWarning";
import { useProfileModel } from "./model";

export const ProfileView = ({
  authenticated,
  user,
}: ReturnType<typeof useProfileModel>) => {
  if (!authenticated) {
    toast.warn("You need to login");
    return (
      <AuthWarning>
        <AuthLink to="/auth">Login</AuthLink> or{" "}
        <AuthLink to="/auth">Register</AuthLink> to see your profile
      </AuthWarning>
    );
  } else {
    return (
      <div>
        <small>user id: {user.id}</small>
        <h1>{user.name}</h1>
        <p>Email: {user.email}</p>
        <p>Password: {user.password}</p>
        <p>Created At: {user.createdAt}</p>
        <p>Updated At: {user.updatedAt}</p>
      </div>
    );
  }
};
