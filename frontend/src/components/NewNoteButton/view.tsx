import { FaPlus } from "react-icons/fa6";
import { useNewNoteButtonModel } from "./model";
import { StyledNewNoteButton } from "./styles";

export const NewNoteButtonView = ({
  navigateToNewNote,
}: ReturnType<typeof useNewNoteButtonModel>) => {
  return (
    <StyledNewNoteButton onClick={navigateToNewNote}>
      <FaPlus />
    </StyledNewNoteButton>
  );
};
