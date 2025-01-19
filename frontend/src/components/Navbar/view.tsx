import { useNavbarModel } from "./model";
import { LinksContainer, NavLink, StyledNavbar } from "./styles";

export const NavbarView = ({ navPages }: ReturnType<typeof useNavbarModel>) => {
  const navLinksComponent = navPages.map(({ name, path }) => {
    return (
      <NavLink key={`navbar_item_${name}`} to={path}>
        {name}
      </NavLink>
    );
  });

  window.addEventListener("scroll", () => {
    let nav = document.getElementById("navbar");
    nav?.classList.toggle("sticky", window.scrollY > 0);
  });

  return (
    <StyledNavbar id="navbar">
      <LinksContainer>{navLinksComponent}</LinksContainer>
    </StyledNavbar>
  );
};
