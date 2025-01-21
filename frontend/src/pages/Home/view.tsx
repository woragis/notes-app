import { toast } from "react-toastify";
import Note from "../../components/Note";
import { useHomeModel } from "./model";
import {
  HomeContainer,
  HomeDivider,
  HomeTitle,
  NotesContainer,
} from "./styles";
import { AuthLink, AuthWarning } from "../../components/ui/AuthWarning";

export const HomeView = ({
  authenticated,
  notes,
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

  if (!authenticated) {
    toast.warn("You need to login");
    return (
      <AuthWarning>
        <AuthLink to="/auth">Login</AuthLink> or{" "}
        <AuthLink to="/auth">Register</AuthLink> to see your notes
      </AuthWarning>
    );
  } else {
    return (
      <HomeContainer>
        <HomeTitle>Notas</HomeTitle>
        <HomeDivider />
        <NotesContainer>{notesComponent}</NotesContainer>
      </HomeContainer>
    );
  }
};
