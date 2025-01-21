import { useAppSelector } from "../../features/hooks";
import { useNotes } from "../../features/notes/hooks";

export const useHomeModel = () => {
  useNotes();

  const notes = useAppSelector((state) => state.notes.notes);
  const authenticated = useAppSelector((state) => state.auth.authenticated);

  return { notes, authenticated };
};
