export const useNavbarModel = () => {
  const navPages = [
    { name: "Home", path: "/", element: () => {} },
    { name: "Profile", path: "/profile", element: () => {} },
  ];

  return { navPages };
};
