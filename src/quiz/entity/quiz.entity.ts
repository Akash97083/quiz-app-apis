import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('quiz')
export class QuizEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  title: string;

  @Column({ type: 'varchar' })
  description: string;
}
