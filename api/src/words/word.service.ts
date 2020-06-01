import { Injectable } from "@nestjs/common";
import { Word } from "./word.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class WordService {
  private readonly words: Word[];

  constructor(
    @InjectRepository(Word)
    private wordsRepository: Repository<Word>
  ) {}

  findAll(): Promise<Word[]> {
    return this.wordsRepository.find();
  }

  async add(word: Word) {
    await this.wordsRepository.save(word);
  }

  async remove(text: string) {
    const deletedWord = await this.wordsRepository.findOne({ where: { text }});
    await this.wordsRepository.delete(deletedWord.id);
  }
}