import styled from "@emotion/styled";

export const NoteContainer = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 60px;
`;

export const NoteTitle = styled.input`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  font-size: 2rem;
  padding: 50px;
  width: 100%;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;
  border: none;
  outline: none;
`;

export const NoteContent = styled.textarea`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  font-size: 1rem;
  width: 100%;
  height: 100%;
  border: none;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;
  outline: none;
`;
