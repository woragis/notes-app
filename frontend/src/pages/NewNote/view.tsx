import { useNewNoteModel } from "./model";
import { NewNoteContent, NewNoteTitle } from "./styles";

export const NewNoteView = ({
  createNewNote,
  handleChange,
  authenticated,
}: ReturnType<typeof useNewNoteModel>) => {
  if (!authenticated) {
    return <h1>Not authenticated yet</h1>;
  } else {
    return (
      <div>
        <form onSubmit={createNewNote}>
          <NewNoteTitle
            type="text"
            id="title"
            name="title"
            onChange={handleChange}
          />
          <NewNoteContent id="content" name="content" onChange={handleChange} />
          <button>Create Note</button>
        </form>
      </div>
    );
  }
};
