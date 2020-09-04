import { Injectable } from '@nestjs/common';
import { Language} from "./language.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateLanguageDto } from './create-language.dto';


@Injectable()
export class LanguageService {
  private readonly languages: Language[];

  constructor(
    @InjectRepository(Language)
    private languageRepository: Repository<Language>
  ) {}

  findAll(): Promise<Language[]> {
    return this.languageRepository.find();
  }

  async create(language: CreateLanguageDto) {
    const languageEntity = this.languageRepository.create(language)
    await this.languageRepository.save(languageEntity);
    return languageEntity;
  }

  async delete(name: string) {
    const deletedLanguage = await this.languageRepository.findOne({ where: { name }});
    await this.languageRepository.delete(deletedLanguage.id);
  }

  async find(name) {
    return this.languageRepository.findOne({ where: { name }});
  }
}