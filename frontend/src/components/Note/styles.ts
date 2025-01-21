import styled from "@emotion/styled";
import { Link } from "@tanstack/react-router";

export const StyledNote = styled.li`
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

export const ContentWrapper = styled(Link)``;

export const NoteTitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  width: 210px;
  max-height: 80px;
  overflow: hidden;
  margin-bottom: 20px;
  font-size: 1.5rem;
`;

export const NoteContentContainer = styled.div`
  width: 100%;
  font-size: 0.9rem;
  color: #ccc;
  overflow: hidden;
  max-height: 200px;
`;

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
`;

export const DeleteButton = styled.button`
  font-size: 14px;
  padding: 10px 10px 8px;
  transition: 300ms;
  border: none;
  flex-basis: auto;

  &:hover {
    background-color: red;
  }
`;

// use on notes model upgrade
// when add tags table and model
export const NotesTagsContainer = styled.div``;
