import { User } from "./user.types";
import { UUID } from "./utils.types";

export interface NoteInterface {
  id: UUID;
  title: string;
  content: string;
  author_id: User["id"];
}
