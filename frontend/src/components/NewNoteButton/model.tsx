import { useNavigate } from "@tanstack/react-router";

export const useNewNoteButtonModel = () => {
  const navigate = useNavigate();

  const navigateToNewNote = () => {
    navigate({
      to: "/new-note",
    });
  };

  return { navigateToNewNote };
};
