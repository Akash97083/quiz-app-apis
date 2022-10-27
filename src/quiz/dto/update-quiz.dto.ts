import { IsNotEmpty, Length } from 'class-validator';

export class UpdateQuizDTO {
  title: string;
  description: string;
}
