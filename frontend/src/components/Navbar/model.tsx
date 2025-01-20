import { NavPagesinterface } from "../../types/navbar.types";

export const useNavbarModel = () => {
  const navPages: NavPagesinterface[] = [
    { name: "Home", path: "/", element: () => {} },
    { name: "Profile", path: "/profile", element: () => {} },
    { name: "Login/Register", path: "/auth", element: () => {} },
  ];

  return { navPages };
};
