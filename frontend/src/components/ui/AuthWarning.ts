import styled from "@emotion/styled";
import { Link } from "@tanstack/react-router";

export const AuthWarning = styled.h1`
  position: absolute;
  left: 50%;
  height: 50%;
  transform: translate(-50%, 50%);
  text-align: center;
  margin: 30px auto;
`;

export const AuthLink = styled(Link)`
  text-decoration: underline;
  color: white;
`;
