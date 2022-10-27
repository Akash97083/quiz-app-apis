import { IsNotEmpty, Length } from 'class-validator';

export class CreateQuizDTO {
  @IsNotEmpty({
    message: 'Quiz should have a title',
  })
  title: string;

  description: string;
}
