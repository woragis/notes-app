import Note from "../../components/Note";
import { useHomeModel } from "./model";
import { HomeDivider, HomeTitle, NotesContainer } from "./styles";

export const HomeView = ({}: ReturnType<typeof useHomeModel>) => {
  const notesComponent = [
    0, 1, 2, 3, 4, 5, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
  ].map((_, index) => {
    return (
      <Note
        note={{
          id: index + 1,
          title: "Oi jurenge",
          content: `${"Como que caga".repeat(index)}`,
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
