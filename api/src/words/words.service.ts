import { Injectable } from "@nestjs/common";
import { Word } from "./word.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateWordDto } from "./create-word.dto";
import { Language } from "src/languages/language.entity";


@Injectable()
export class WordService {
  private readonly words: Word[];

  constructor(
    @InjectRepository(Word)
    private wordsRepository: Repository<Word>,
    @InjectRepository(Language)
    private languagesRepository: Repository<Language>
  ) {}

  findAll(): Promise<Word[]> {
    return this.wordsRepository.find();
  }

  async create(word: CreateWordDto) {
    const searchedLanguage = await this.languagesRepository.findOne({ where: { name }});
    if (searchedLanguage) {
      const newWord = new Word();
      newWord.text = word.text;
      newWord.language = searchedLanguage;
    }
  }

  async add(word: Word) {
    await this.wordsRepository.save(word);
  }

  async remove(text: string) {
    const deletedWord = await this.wordsRepository.findOne({ where: { text }});
    await this.wordsRepository.delete(deletedWord.id);
  }
}