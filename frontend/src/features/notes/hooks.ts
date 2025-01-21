import { useMutation, useQuery } from "@tanstack/react-query";
import {
  deleteNoteService,
  getNotesService,
  updateNoteService,
} from "../../api/services/notes";
import {
  createNoteThunk,
  deleteNoteThunk,
  getNotesThunk,
  updateNoteThunk,
} from "./thunks";
import { useAppDispatch } from "../hooks";
import { NoteInterface } from "../../types/note.types";

export const useNotes = () => {
  const dispatch = useAppDispatch();

  const response = useQuery({
    queryKey: ["notes"],
    queryFn: async () => await getNotesService(),
  });

  if (response.data) dispatch(getNotesThunk(response.data));
};

export const useCreateNote = (note: NoteInterface) => {
  const dispatch = useAppDispatch();

  const response = useMutation({
    mutationKey: ["notes"],
    mutationFn: async () => await updateNoteService(note),
  });

  if (response.data) dispatch(createNoteThunk(response.data.data));
};

export const useUpdateNote = (note: NoteInterface) => {
  const dispatch = useAppDispatch();

  const response = useMutation({
    mutationKey: ["notes"],
    mutationFn: async () => await updateNoteService(note),
  });

  if (response.data) dispatch(updateNoteThunk(response.data.data));
};

export const useDeleteNote = (noteId: NoteInterface["id"]) => {
  const dispatch = useAppDispatch();

  const response = useMutation({
    mutationKey: ["notes"],
    mutationFn: async () => await deleteNoteService(noteId),
  });

  if (response.data) dispatch(deleteNoteThunk(noteId));
};
