import { FaTrashCan } from "react-icons/fa6";
import { useNoteModel } from "./model";
import {
  ContentWrapper,
  DeleteButton,
  NoteContentContainer,
  NoteTitleContainer,
  StyledHeader,
  StyledNote,
} from "./styles";

export const NoteView = ({
  note,
  deleteNote,
}: ReturnType<typeof useNoteModel>) => {
  return (
    <StyledNote>
      <ContentWrapper to={`notes/${note.id}`}>
        <StyledHeader>
          <NoteTitleContainer>{note.title}</NoteTitleContainer>
          <DeleteButton onClick={deleteNote}>
            <FaTrashCan />
          </DeleteButton>
        </StyledHeader>
        <NoteContentContainer>{note.content}</NoteContentContainer>
      </ContentWrapper>
    </StyledNote>
  );
};
