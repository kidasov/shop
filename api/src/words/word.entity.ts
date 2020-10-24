import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Language } from '../languages/language.entity';
import { Translation } from 'src/translations/translation.entity';

@Entity()
export class Word {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @ManyToOne(type => Language, language => language.words, { eager: true } )
  @JoinColumn()
  language: Language;

  @OneToMany(type => Translation, translation => translation.firstWord)
  @JoinColumn()
  translations: Translation[];
}