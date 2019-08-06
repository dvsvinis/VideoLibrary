import { Comment } from './comment';
export class Video {
  id: number;
  title: string;
  filepath: string;
  datecreated: string;
  description: string;
  userId: number;
  comments: Comment[];
  file: File;

}
