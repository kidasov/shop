import { Injectable, PayloadTooLargeException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FindTranslationDto } from './find-translation-dto';
import { AddTranslationDto } from './add-translation-dto';
import { Translation } from './translation.entity';
import { WordsService } from 'src/words/words.service';
import { Language } from 'src/languages/language.entity';

@Injectable()
export class TranslationsService {
  constructor(
    @InjectRepository(Translation)
    private translationsRepository: Repository<Translation>,
    private wordsService: WordsService,
  ) {}

  async find(translation: FindTranslationDto) {
    const { word: text, fromId, toId } = translation;
    console.log('text', text, fromId, translation);
    const searchedWord = await this.wordsService.find(
      text,
      fromId
    );
    if (searchedWord) {
      const searchedTranslations = await this.translationsRepository.find({
        where: {
          firstWord: {
            id: searchedWord.id
          },
          toLanguage: {
            id: toId
          }
        },
      });
      console.log('searched translations', searchedTranslations);
      return searchedTranslations;
    }

    return [];
  }

  async add(translation: AddTranslationDto) {
    const {
      fromText,
      fromId,
      toText,
      toId
    } = translation;
    let fromWord = await this.wordsService.find(
      fromText,
      fromId,
    );

    console.log(fromWord);

    if (!fromWord) {
      fromWord = await this.wordsService.create({
        text: fromText,
        languagedId: fromId,
      });
    }
    let toWord = await this.wordsService.find(toText, toId);
    if (!toWord) {
      toWord = await this.wordsService.create({
        text: toText,
        languagedId: toId,
      });
    }
    
    const fromLanguage = new Language();
    fromLanguage.id = fromId;

    const toLanguage = new Language();
    toLanguage.id = toId;

    const newTranslation = new Translation();
    newTranslation.firstWord = fromWord;
    newTranslation.secondWord = toWord;
    newTranslation.fromLanguage = fromLanguage;
    newTranslation.toLanguage = toLanguage;

    await this.translationsRepository.insert(this.translationsRepository.create(newTranslation));
    return newTranslation;
  }
}
