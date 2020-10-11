import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Language } from '../languages/language.entity';
import { Word } from '../words/word.entity';

@Entity()
export class Translation {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => Word, { eager: true })
  @JoinColumn()
  firstWord: Word;

  @ManyToOne(type => Word, { eager: true })
  @JoinColumn()
  secondWord: Word;

  @ManyToOne(type => Language)
  @JoinColumn()
  fromLanguage: Language;

  @ManyToOne(type => Language)
  @JoinColumn()
  toLanguage: Language;
}