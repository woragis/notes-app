export const useNavbarModel = () => {
  const navPages = [
    { name: "Home", path: "/", element: () => {} },
    { name: "Profile", path: "/profile", element: () => {} },
    { name: "Login/Register", path: "/auth", element: () => {} },
  ];

  return { navPages };
};
