import { useParams } from "@tanstack/react-router";
import { useAppDispatch, useAppSelector } from "../../features/hooks";
import { ChangeEvent, useEffect, useState } from "react";
import { getNote } from "../../features/notes/slice";
import { updateNoteThunk } from "../../features/notes/thunks";

export const useNoteModel = () => {
  const dispatch = useAppDispatch();
  const { noteId } = useParams({
    from: "/notes/$noteId",
  });

  const authenticated = useAppSelector((state) => state.auth.authenticated);
  const noteInitialState = useAppSelector((state) => state.notes.note);
  const [note, setNote] = useState(noteInitialState);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNote(
      (note) => (note = { ...note, [event.target.id]: event.target.value })
    );
  };

  useEffect(() => {
    dispatch(getNote(noteId));
  }, [dispatch, noteId]);

  useEffect(() => {
    setNote(noteInitialState);
  }, [noteInitialState]);

  useEffect(() => {
    const updateDebouncer = setTimeout(() => {
      if (note !== noteInitialState) {
        dispatch(updateNoteThunk(note));
      }
    }, 5000);

    return () => {
      clearTimeout(updateDebouncer);
    };
  }, [note]);

  return { authenticated, note, handleChange };
};
