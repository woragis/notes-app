import { useNoteModel } from "./model";
import { NoteTitleContainer, NoteContentContainer } from "./styles";

export const NoteView = ({
  note,
  handleChange,
}: ReturnType<typeof useNoteModel>) => {
  return (
    <div>
      <br />
      <hr />
      <h3>{note.id}</h3>
      <form action="">
        <NoteTitleContainer
          type="text"
          id="title"
          name="title"
          onChange={handleChange}
          value={note.title || ""}
        />
        <br />
        <hr />
        <br />
        <NoteContentContainer
          id="content"
          name="content"
          onChange={handleChange}
          value={note.content || ""}
        />
      </form>
      <p>author: {note.author_id}</p>
    </div>
  );
};
