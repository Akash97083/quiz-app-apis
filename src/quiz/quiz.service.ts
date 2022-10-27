import { Injectable, NotFoundException } from '@nestjs/common';
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

  async getQuiz(id: number): Promise<QuizEntity> {
    const quiz = await this.quizRepository.findOne({
      where: {
        id,
      },
    });

    if (!quiz) {
      throw new NotFoundException(`Quiz with id ${id} not found`);
    }
    return quiz;
  }

  createQuiz(quizData: CreateQuizDTO) {
    return this.quizRepository.save(quizData);
  }

  async updateQuiz(id: number, quizData: UpdateQuizDTO) {
    const quiz = await this.quizRepository.findOne({
      where: {
        id,
      },
    });

    if (!quiz) {
      throw new NotFoundException(`Quiz with id ${id} not found`);
    }
    return this.quizRepository.update(id, quizData);
  }

  async deleteQuiz(id: number) {
    const quiz = await this.quizRepository.findOne({
      where: {
        id,
      },
    });

    if (!quiz) {
      throw new NotFoundException(`Quiz with id ${id} not found`);
    }
    return this.quizRepository.delete(id);
  }
}
