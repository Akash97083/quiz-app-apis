import { Allow, IsNotEmpty, Length } from 'class-validator';

export class UpdateQuizDTO {
  @Allow()
  title: string;

  @Allow()
  description: string;
}
