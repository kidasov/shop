import { Controller, Post, Get, Param, Body, Res, HttpStatus } from "@nestjs/common";
import { LanguageService } from './languages.service';
import { CreateLanguageDto } from './create-language.dto';

@Controller('languages')
export class LanguagesController {
  constructor(private languageService: LanguageService) {}

  @Post()
  async create(@Body() createLanguageDto: CreateLanguageDto) {    
    const language = await this.languageService.create(createLanguageDto);
    console.log('lang', language)
    return language;
  }

  @Get()
  findAll() {
    return this.languageService.findAll();
  }
}