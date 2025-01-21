import { NewNoteButtonView } from "./view";
import { useNewNoteButtonModel } from "./model";

const NewNoteButton = () => {
  const model = useNewNoteButtonModel();
  return <NewNoteButtonView {...model} />;
};

export default NewNoteButton;
