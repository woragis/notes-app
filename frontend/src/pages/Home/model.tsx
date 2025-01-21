import { useAppSelector } from "../../features/hooks";
import { useNavigate } from "@tanstack/react-router";
import { useNotes } from "../../features/notes/hooks";

export const useHomeModel = () => {
  const navigate = useNavigate();
  useNotes();

  const notes = useAppSelector((state) => state.notes.notes);
  const authenticated = useAppSelector((state) => state.auth.authenticated);

  const navigateToNewNote = () => {
    navigate({
      to: "/new-note",
    });
  };

  return { notes, authenticated, navigateToNewNote };
};
