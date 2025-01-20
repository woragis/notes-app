import Note from "../../components/Note";
import { useHomeModel } from "./model";
import { HomeDivider, HomeTitle, NotesContainer } from "./styles";

export const HomeView = ({
  notes,
  navigateToNewNote,
  authenticated,
}: ReturnType<typeof useHomeModel>) => {
  const notesComponent = notes.map((note, index) => {
    return (
      <Note
        key={`note_n_${index}`}
        note={{
          id: note.id,
          title: note.title,
          content: note.content,
          author_id: note.author_id,
        }}
      />
    );
  });

  return (
    <div>
      <HomeTitle>Notas</HomeTitle>
      <HomeDivider />
      {!authenticated && <h1>Login or register to see your notes</h1>}
      {authenticated && <NotesContainer>{notesComponent}</NotesContainer>}
      <button onClick={navigateToNewNote}>New Note</button>
    </div>
  );
};
