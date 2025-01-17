import { useNoteModel } from "./model";
import { NoteContentContainer, NoteTitleContainer, StyledNote } from "./styles";

export const NoteView = ({ note }: ReturnType<typeof useNoteModel>) => {
  return (
    <StyledNote to={`note/${note.id}`}>
      <NoteTitleContainer>{note.title}</NoteTitleContainer>
      <NoteContentContainer>{note.content}</NoteContentContainer>
    </StyledNote>
  );
};
