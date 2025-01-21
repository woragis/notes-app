import { NavPagesinterface } from "../../types/navbar.types";
import { useAppDispatch, useAppSelector } from "../../features/hooks";
import { logout } from "../../features/auth/slice";
import { BiUserCircle } from "react-icons/bi";

export const useNavbarModel = () => {
  const dispatch = useAppDispatch();
  const authenticated = useAppSelector((state) => state.auth.authenticated);

  const onClick = () => {};
  const logoutFunc = () => {
    dispatch(logout());
  };
  const navPages: NavPagesinterface[] = [
    { name: "Home", path: "/", onClick },
    !authenticated
      ? { name: "Login/Register", path: "/auth", onClick }
      : {
          name: "Profile",
          path: "/profile",
          element: <BiUserCircle />,
          onClick,
        },
  ];

  navPages.push({
    name: "Logout",
    path: "/",
    onClick: logoutFunc,
  });

  return { navPages };
};
