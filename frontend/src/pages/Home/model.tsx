import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../features/hooks";
import { fetchNotes } from "../../api/services/notes";
import { setNotes } from "../../features/notes/slice";

export const useHomeModel = () => {
  const notes = useAppSelector((state) => state.notes);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const fetch = async () => {
      const response = await fetchNotes();
      // console.log("notes:", response.data);
      dispatch(setNotes(response.data));
    };
    fetch();
  }, []);

  return { notes };
};
