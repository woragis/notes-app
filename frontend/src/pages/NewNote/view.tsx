import { toast } from "react-toastify";
import { AuthLink, AuthWarning } from "../../components/ui/AuthWarning";
import { useNewNoteModel } from "./model";
import {
  NoteContent,
  NoteTitle,
  NoteContainer,
} from "../../components/ui/Note";

export const NewNoteView = ({
  authenticated,
  createNewNote,
  handleChange,
}: ReturnType<typeof useNewNoteModel>) => {
  if (!authenticated) {
    toast.warn("You need to login");
    return (
      <AuthWarning>
        <AuthLink to="/auth">Login</AuthLink> or{" "}
        <AuthLink to="/auth">Register</AuthLink> before creating a new note
      </AuthWarning>
    );
  } else {
    return (
      <NoteContainer>
        <form onSubmit={createNewNote}>
          <NoteTitle
            type="text"
            id="title"
            name="title"
            placeholder="title"
            onChange={handleChange}
          />
          <NoteContent
            id="content"
            name="content"
            placeholder="..."
            onChange={handleChange}
          />
          <button>Create Note</button>
        </form>
      </NoteContainer>
    );
  }
};
