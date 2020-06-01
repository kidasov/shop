import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToMany, JoinTable } from 'typeorm';
import { Language } from '../languages/language.entity';
import { Word } from '../words/word.entity';

@Entity()
export class Translation {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(type => Word)
  @JoinColumn()
  firstWord: Word;

  @OneToOne(type => Word)
  @JoinColumn()
  secondWord: Word;
}