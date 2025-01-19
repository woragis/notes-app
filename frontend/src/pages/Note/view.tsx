import { useNoteModel } from "./model";

export const NoteView = ({ note }: ReturnType<typeof useNoteModel>) => {
  if (note)
    return (
      <div>
        <h1>Note: {note.id}</h1>

        <br />
        <hr />
        <h3>{note.title}</h3>
        <br />
        <p>{note.content}</p>
        <p>author: {note.author_id}</p>
      </div>
    );
  else {
    return <h1>No note selected</h1>;
  }
};
