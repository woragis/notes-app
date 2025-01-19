import { User } from "./user.types";

export interface NoteInterface {
  id: number;
  title: string;
  content: string;
  author_id: User["id"];
}
