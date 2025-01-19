import Note from "../../components/Note";
import { useHomeModel } from "./model";
import { HomeDivider, HomeTitle, NotesContainer } from "./styles";

export const HomeView = ({ notes }: ReturnType<typeof useHomeModel>) => {
  const notesComponent = notes.map((note, index) => {
    return (
      <Note
        key={`note_n_${index}`}
        note={{
          id: note.id,
          title: note.title,
          content: note.content,
        }}
      />
    );
  });

  return (
    <div>
      <HomeTitle>Notas</HomeTitle>
      <HomeDivider />
      <NotesContainer>{notesComponent}</NotesContainer>
    </div>
  );
};
