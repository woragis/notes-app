import { useNewNoteModel } from "./model";
import { NewNoteView } from "./view";

const NewNote = () => {
  const model = useNewNoteModel();

  return <NewNoteView {...model} />;
};

export default NewNote;
