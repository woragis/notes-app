import { ChangeEvent, FormEvent, useState } from "react";
import { NoteInterface } from "../../types/note.types";
import { useAppDispatch, useAppSelector } from "../../features/hooks";
import { createNoteThunk, getNotesThunk } from "../../features/notes/thunks";
import { useNavigate } from "@tanstack/react-router";

export const useNewNoteModel = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [note, setNote] = useState<NoteInterface>({} as NoteInterface);
  const userId = useAppSelector((state) => state.auth.user.id);
  const authenticated = useAppSelector((state) => state.auth.authenticated);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNote(
      (note) => (note = { ...note, [event.target.id]: event.target.value })
    );
  };
  const createNewNote = async (event: FormEvent) => {
    event.preventDefault();

    dispatch(createNoteThunk({ ...note, author_id: userId }))
      .unwrap()
      .then((createdNote) => {
        console.log("Display successfull dialog");
        dispatch(getNotesThunk());
        navigate({
          to: `/notes/${createdNote.data.id}`,
        });
      })
      .catch(() => {
        console.log("Send error message with toastify");
      });
  };

  return { authenticated, handleChange, createNewNote };
};
