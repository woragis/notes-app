import { useNavigate } from "@tanstack/react-router";
import { useAppDispatch } from "../../features/hooks";
import { NoteInterface } from "../../types/note.types";
import { deleteNoteThunk } from "../../features/notes/thunks";

export const useNoteModel = (note: NoteInterface) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const deleteNote = () => {
    dispatch(deleteNoteThunk(note.id))
      .then(() => {
        navigate({
          to: "/",
        });
      })
      .catch(() => {
        console.log("display with toastify");
      });
  };

  return { note, deleteNote };
};
