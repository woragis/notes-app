import { useParams } from "@tanstack/react-router";
import { useAppDispatch, useAppSelector } from "../../features/hooks";
import { getNote } from "../../features/notes/slice";

export const useNoteModel = () => {
  const { noteId } = useParams({
    from: "/notes/$noteId",
  });
  const dispatch = useAppDispatch();
  dispatch(getNote(Number(noteId)));
  const note = useAppSelector((state) => state.notes.note);

  return { note };
};
