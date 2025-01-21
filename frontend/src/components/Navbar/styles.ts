import styled from "@emotion/styled";
import { Link } from "@tanstack/react-router";

export const StyledNavbar = styled.nav`
  gap: 1.5rem;
  padding: 2.5rem 3.125rem;
  background-color: none;
  position: fixed;
  width: 100%;
  transition: 500ms;

  &.sticky {
    background-color: black;
    padding: 0.5125rem 3.125rem;
  }
`;

export const LinksContainer = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1.5rem;
  margin-block: 0.625rem;
`;

export const NavLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  /* margin: 0 20px; */
  font-size: 20px;
  font-weight: bold;
  color: white;
`;
