import styled from "@emotion/styled";
import { Link } from "@tanstack/react-router";

export const StyledFooter = styled.footer`
  --color: #fff;
  --weak-color: #ddd;
  --background: #333;
  color: var(--weak-color);
  background-color: var(--background);
  text-align: center;

  a {
    color: var(--color);
    text-decoration: none;
  }

  h4 {
    margin-bottom: 1em;
    text-transform: uppercase;
  }
`;

export const FooterContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  gap: 2em;
  max-width: 1000px;
  margin: 0 auto;
  padding: 2em;
`;

export const FooterMedia = styled.ul`
  margin: 1.5em 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5em 0;
  gap: 0.5em;

  li {
    display: inline-block;
  }
  a {
    border-radius: 50%;
    border: 1px var(--weak-color) solid;
    font-size: 1.1em;
    width: 2em;
    height: 2em;
    svg {
      fill: var(--weak-color);
    }
    &:hover {
      svg {
        fill: var(--color);
      }
      border-color: var(--color);
    }
  }
`;

export const FooterBrand = styled(Link)`
  display: block;
  font-size: 1.8em;
  font-weight: 600;
  margin-bottom: 1em;
  margin: 0;
`;

export const FooterLink = styled(Link)`
  color: var(--weak-color);
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 300ms;

  &:hover {
    color: var(--color);
    text-decoration: underline;
  }
`;

export const FooterTitle = styled.h4`
  margin-bottom: 1rem;
  text-transform: uppercase;
`;

export const CopyrightContainer = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.625rem;
  color: var(--weak-color);
  background-color: #101010;
  width: 100%;
  text-transform: capitalize;
  text-align: center;
`;
