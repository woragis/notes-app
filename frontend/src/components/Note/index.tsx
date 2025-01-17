import { NoteInterface } from "../../types/note.types";
import { useNoteModel } from "./model";
import { NoteView } from "./view";

const Note = ({ note }: { note: NoteInterface }) => {
  const model = useNoteModel(note);

  return <NoteView {...model} />;
};

export default Note;
