import { useNavigate } from "@tanstack/react-router";
import { deleteNoteService } from "../../api/services/notes";
import { useAppDispatch } from "../../features/hooks";
import { deleteNote } from "../../features/notes/slice";
import { NoteInterface } from "../../types/note.types";

export const useNoteModel = (note: NoteInterface) => {
  // const note: NoteInterface = {
  //   id: 3,
  //   title: "Oi jureque",
  //   content: "oi",
  // };
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const deleteCurrentNote = async () => {
    const result = await deleteNoteService(note.id);
    if (result.data) {
      dispatch(deleteNote(note.id));
      navigate({
        to: "/",
      });
    } else {
      alert("Note could not be deleted");
    }
  };
  return { note, deleteNote: deleteCurrentNote };
};
