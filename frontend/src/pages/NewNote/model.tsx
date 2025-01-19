import { ChangeEvent, FormEvent, useState } from "react";
import { NoteInterface } from "../../types/note.types";
import { useNavigate } from "@tanstack/react-router";
import { useAppDispatch, useAppSelector } from "../../features/hooks";
import { createNoteThunk } from "../../features/notes/thunks";

export const useNewNoteModel = () => {
  const [note, setNote] = useState<NoteInterface>({} as NoteInterface);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const createNewNote = async (event: FormEvent) => {
    event.preventDefault();
    dispatch(createNoteThunk(note));
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
