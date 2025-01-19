import { ChangeEvent, FormEvent, useState } from "react";
import { NoteInterface } from "../../types/note.types";
import { createNoteService } from "../../api/services/notes";
import { useNavigate } from "@tanstack/react-router";
import { useAppDispatch, useAppSelector } from "../../features/hooks";
import { createNote } from "../../features/notes/slice";

export const useNewNoteModel = () => {
  const [note, setNote] = useState<NoteInterface>({} as NoteInterface);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const createNewNote = async (event: FormEvent) => {
    event.preventDefault();
    const response = await createNoteService(note);
    dispatch(createNote(response.data));
    navigate({
      to: `/${response.data.id}`,
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
