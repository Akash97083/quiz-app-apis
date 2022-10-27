import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateQuizDTO } from './dto/create-quiz.dto';
import { UpdateQuizDTO } from './dto/update-quiz.dto';
import { QuizEntity } from './entity/quiz.entity';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(QuizEntity)
    private readonly quizRepository: Repository<QuizEntity>,
  ) {}

  getAllQuiz(): Promise<QuizEntity[]> {
    return this.quizRepository.find();
  }

  getQuiz(id: number): Promise<QuizEntity> {
    return this.quizRepository.findOne({
      where: {
        id,
      },
    });
  }

  createQuiz(quizData: CreateQuizDTO) {
    return this.quizRepository.save(quizData);
  }

  updateQuiz(id: number, quizData: UpdateQuizDTO) {
    return this.quizRepository.update(id, quizData);
  }

  deleteQuiz(id: number) {
    return this.quizRepository.delete(id);
  }
}
