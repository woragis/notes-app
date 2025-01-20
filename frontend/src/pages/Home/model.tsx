import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../features/hooks";
import { useNavigate } from "@tanstack/react-router";
import { getNotesThunk } from "../../features/notes/thunks";

export const useHomeModel = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const notes = useAppSelector((state) => state.notes.notes);

  useEffect(() => {
    dispatch(getNotesThunk());
  }, []);

  const createNote = () => {
    navigate({
      to: "/new-note",
    });
  };

  const authenticated = useAppSelector((state) => state.auth.authenticated);

  return { notes, createNote, authenticated };
};
