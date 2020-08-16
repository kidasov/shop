import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Word } from '../words/word.entity';
import { Repository } from 'typeorm';
import { FindTranslationDto } from './find-translation-dto';
import { Translation } from './translation.entity';

@Injectable()
export class TranslationService {
  constructor(
    @InjectRepository(Translation)
    private translationsRepository: Repository<Translation>,
    @InjectRepository(Word)
    private wordsRepository: Repository<Word>
  ) {}

  async find(translation: FindTranslationDto) {
    const searchedWord = await this.wordsRepository.findOne({ where: { text: translation.text }});
    if (searchedWord) {
      const searchedTranslation = await this.translationsRepository.findOne({ where: { firstWord: searchedWord, 'secondWord.language.id': translation.toLanguageId }  })
      return searchedTranslation;
    }

    return null;
  }
}