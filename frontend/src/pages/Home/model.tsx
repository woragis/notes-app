import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../features/hooks";
import { getNotesService } from "../../api/services/notes";
import { setNotes } from "../../features/notes/slice";
import { useNavigate } from "@tanstack/react-router";

export const useHomeModel = () => {
  const notes = useAppSelector((state) => state.notes.notes);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const fetch = async () => {
      const response = await getNotesService();
      // console.log("notes:", response.data);
      dispatch(setNotes(response.data));
    };
    fetch();
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
