import { useNoteModel } from "./model";
import {
  ContentWrapper,
  NoteContentContainer,
  NoteTitleContainer,
  StyledNote,
} from "./styles";

export const NoteView = ({
  note,
  deleteNote,
}: ReturnType<typeof useNoteModel>) => {
  return (
    <StyledNote>
      <header>
        <button onClick={deleteNote}>Delete note</button>
      </header>
      <ContentWrapper to={`notes/${note.id}`}>
        <NoteTitleContainer>{note.title}</NoteTitleContainer>
        <NoteContentContainer>{note.content}</NoteContentContainer>
      </ContentWrapper>
    </StyledNote>
  );
};
