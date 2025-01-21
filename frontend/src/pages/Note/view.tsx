import { toast } from "react-toastify";
import { AuthLink, AuthWarning } from "../../components/ui/AuthWarning";
import { useNoteModel } from "./model";
import {
  NoteContainer,
  NoteContent,
  NoteTitle,
} from "../../components/ui/Note";

export const NoteView = ({
  authenticated,
  note,
  handleChange,
}: ReturnType<typeof useNoteModel>) => {
  if (!authenticated) {
    toast.warn("You need to login");
    return (
      <AuthWarning>
        <AuthLink to="/auth">Login</AuthLink> or{" "}
        <AuthLink to="/auth">Register</AuthLink> to see your note
      </AuthWarning>
    );
  } else {
    return (
      <NoteContainer>
        <br />
        <hr />
        <h3>{note.id}</h3>
        <form action="">
          <NoteTitle
            type="text"
            id="title"
            name="title"
            placeholder="title"
            onChange={handleChange}
            value={note.title || ""}
          />
          <br />
          <hr />
          <br />
          <NoteContent
            id="content"
            name="content"
            placeholder="..."
            onChange={handleChange}
            value={note.content || ""}
          />
        </form>
        <p>author: {note.author_id}</p>
      </NoteContainer>
    );
  }
};
