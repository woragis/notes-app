import styled from "@emotion/styled";
import { Link } from "@tanstack/react-router";

export const StyledNote = styled(Link)`
  color: #fff;
  display: inline-block;
  padding: 12px 20px 26px;
  background-color: #444;
  border-radius: 0.8rem;
  min-height: fit-content;
  max-height: 320px;
  width: 100%;
  overflow-y: hidden;
  margin-bottom: 20px;
`;

export const NoteTitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
  font-size: 1.5rem;
`;

export const NoteContentContainer = styled.div`
  width: 100%;
  font-size: 0.9rem;
  color: #ccc;
  overflow-y: hidden;
  max-height: 200px;
`;

// use on notes model upgrade
// when add tags table and model
export const NotesTagsContainer = styled.div``;
