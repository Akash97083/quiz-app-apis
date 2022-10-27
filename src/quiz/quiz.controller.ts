import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateQuizDTO } from './dto/create-quiz.dto';
import { UpdateQuizDTO } from './dto/update-quiz.dto';
import { QuizService } from './quiz.service';

@Controller('/api/v1/quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Get('/')
  @HttpCode(200)
  getAllQuiz() {
    return this.quizService.getAllQuiz();
  }

  @Get('/:id')
  @HttpCode(200)
  getQuiz(@Param('id', ParseIntPipe) id: number) {
    return this.quizService.getQuiz(id);
  }

  @Post('/')
  @HttpCode(201)
  postQuiz(@Body() quizData: CreateQuizDTO) {
    return this.quizService.createQuiz(quizData);
  }

  @Delete('/:id')
  @HttpCode(200)
  deleteQuiz(@Param('id', ParseIntPipe) id: number) {
    return this.quizService.deleteQuiz(id);
  }

  @Patch('/:id')
  @HttpCode(200)
  updateQuiz(
    @Body() quizData: UpdateQuizDTO,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.quizService.updateQuiz(id, quizData);
  }
}
