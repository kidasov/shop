import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Word {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;
}