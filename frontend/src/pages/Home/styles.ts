import styled from "@emotion/styled";

export const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const NotesContainer = styled.section`
  width: 100%;
  padding: 20px 50px;
  height: max-content;
  columns: 15rem;
  overflow-x: hidden;
  overflow-y: scroll;
`;

export const HomeTitle = styled.h1`
  text-align: center;
  color: #fff;
  font-size: 2.375rem;
  margin: 20px 0;
`;

export const HomeDivider = styled.hr`
  max-width: 78.125rem;
  margin: 0 auto;
`;
