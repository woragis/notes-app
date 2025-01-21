import { ChangeEvent, FormEvent, useState } from "react";
import { NoteInterface } from "../../types/note.types";
import { useAppDispatch, useAppSelector } from "../../features/hooks";
import { createNoteThunk } from "../../features/notes/thunks";
import { useNavigate } from "@tanstack/react-router";
import { toast } from "react-toastify";

export const useNewNoteModel = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [note, setNote] = useState<NoteInterface>({} as NoteInterface);
  const userId = useAppSelector((state) => state.auth.user?.id);
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
        navigate({
          to: `/notes/${createdNote.data.id}`,
        });
      })
      .catch((e) => {
        toast.error(`Error: ${e}`);
      });
  };

  return { authenticated, handleChange, createNewNote };
};
