import { useNoteModel } from "./model";
import { NoteView } from "./view";

const Note = () => {
  const model = useNoteModel();

  return <NoteView {...model} />;
};

export default Note;
