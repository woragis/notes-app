import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../features/hooks";
import { useNavigate } from "@tanstack/react-router";
import { getNotesThunk } from "../../features/notes/thunks";

export const useHomeModel = () => {
  const notes = useAppSelector((state) => state.notes.notes);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getNotesThunk());
  }, []);

  const navigate = useNavigate();
  const createNote = () => {
    navigate({
      to: "/new-note",
    });
  };

  const authenticated = useAppSelector((state) => state.auth.authenticated);

  return { notes, createNote, authenticated };
};
