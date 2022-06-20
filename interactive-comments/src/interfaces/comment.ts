import User from "./user";

export default interface Comment {
  id: string;
  content: string;
  createdAt: number;
  likes: string[];
  dislikes: string[];
  parentId: string | null;
  replyTo: string | null;
  isEdited: boolean;
  user: User;
}
