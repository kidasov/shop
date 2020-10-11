import { Injectable } from '@nestjs/common';
import { Word } from './word.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateWordDto } from './create-word.dto';
import { LanguageService } from 'src/languages/languages.service';

@Injectable()
export class WordsService {
  private readonly words: Word[];

  constructor(
    @InjectRepository(Word)
    private wordsRepository: Repository<Word>,
    private languageService: LanguageService,
  ) {}

  findAll(): Promise<Word[]> {
    return this.wordsRepository.find();
  }

  async create(word: CreateWordDto) {
    const searchedLanguage = await this.languageService.find(word.languagedId);
    const newWord = new Word();
    newWord.text = word.text;
    newWord.language = searchedLanguage;
    console.log("Creating new word", newWord);
    const createdWord = this.wordsRepository.create(newWord);
    await this.wordsRepository.save(createdWord);
    return newWord;
  }

  async add(word: Word) {
    await this.wordsRepository.save(word);
  }

  async remove(text: string) {
    const deletedWord = await this.wordsRepository.findOne({ where: { text } });
    await this.wordsRepository.delete(deletedWord.id);
  }

  async find(text: string, languageId: number) {
    console.log('text', text, languageId);
    const searchedWord = await this.wordsRepository.findOne({
      where: { text, languageId: languageId },
    });
    console.log('[word service: find searched word]', searchedWord);
    return searchedWord;
  }
}
