import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FindTranslationDto } from './find-translation-dto';
import { AddTranslationDto } from './add-translation-dto';
import { Translation } from './translation.entity';
import { WordsService } from 'src/words/words.service';

@Injectable()
export class TranslationsService {
  constructor(
    @InjectRepository(Translation)
    private translationsRepository: Repository<Translation>,
    private wordsService: WordsService,
  ) {}

  async find(translation: FindTranslationDto) {
    const { text, fromLanguageId, fromLanguageName } = translation;
    const searchedWord = await this.wordsService.find(
      text,
      fromLanguageId,
      fromLanguageName,
    );
    if (searchedWord) {
      const searchedTranslations = await this.translationsRepository.find({
        where: {
          firstWord: searchedWord,
          'secondWord.language.id': translation.toLanguageId,
        },
      });
      console.log('searched translations', searchedTranslations);
      return searchedTranslations;
    }

    return null;
  }

  async add(translation: AddTranslationDto) {
    const {
      fromText,
      fromLanguageId,
      fromLanguageName,
      toText,
      toLanguageId,
      toLanguageName,
    } = translation;
    let fromWord = await this.wordsService.find(
      fromText,
      fromLanguageId,
      fromLanguageName,
    );
    if (!fromWord) {
      fromWord = await this.wordsService.create({
        text: fromText,
        languagedId: fromLanguageId,
      });
    }
    let toWord = await this.wordsService.find(toText, toLanguageId, toLanguageName);
    if (!toWord) {
      toWord = await this.wordsService.create({
        text: toText,
        languagedId: toLanguageId,
      });
    }
    const newTranslation = new Translation();
    newTranslation.firstWord = fromWord;
    newTranslation.secondWord = toWord;
    await this.translationsRepository.save(newTranslation);

    return newTranslation;
  }
}
