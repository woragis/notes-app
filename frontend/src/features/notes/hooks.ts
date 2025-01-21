import { useQuery } from "@tanstack/react-query";
import { getNotesService } from "../../api/services/notes";
import { getNotesThunk } from "./thunks";
import { useAppDispatch } from "../hooks";

export const useNotes = () => {
  const dispatch = useAppDispatch();

  const response = useQuery({
    queryKey: ["notes"],
    queryFn: async () => {
      const response = await getNotesService();
      return response;
    },
  });
  if (response.data) dispatch(getNotesThunk(response.data));
};
