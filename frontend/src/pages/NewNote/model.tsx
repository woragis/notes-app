import { ChangeEvent, FormEvent, useState } from "react";
import { NoteInterface } from "../../types/note.types";
import { useNavigate } from "@tanstack/react-router";
import { useAppDispatch, useAppSelector } from "../../features/hooks";
import { createNoteThunk } from "../../features/notes/thunks";

export const useNewNoteModel = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [note, setNote] = useState<NoteInterface>({} as NoteInterface);
  const userId = useAppSelector((state) => state.auth.user.id);

  const createNewNote = async (event: FormEvent) => {
    event.preventDefault();
    dispatch(createNoteThunk({ ...note, author_id: userId }));
    const newNote = useAppSelector((state) => state.notes.note);

    navigate({
      to: `/${newNote?.id}`,
    });
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNote(
      (note) => (note = { ...note, [event.target.id]: event.target.value })
    );
  };

  const authenticated = useAppSelector((state) => state.auth.authenticated);

  return { createNewNote, handleChange, authenticated };
};
