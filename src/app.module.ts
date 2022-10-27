import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizEntity } from './quiz/entity/quiz.entity';
import { QuizModule } from './quiz/quiz.module';

@Module({
  imports: [
    QuizModule,
    ConfigModule.forRoot({
      envFilePath: '.development.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: process.env.DB_USER,
      password: process.env.DB_PWD,
      database: 'quiz_db',
      entities: [QuizEntity],
      synchronize: true,
    }),
  ],
})
export class AppModule {}
