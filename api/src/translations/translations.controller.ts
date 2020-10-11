import { Controller, Get, Body, Post, Req } from "@nestjs/common";
import { TranslationsService } from "./translations.service";
import { AddTranslationDto } from "./add-translation-dto";
import { Request } from 'express';

@Controller('translations')
export class TranslationsController {
  constructor(private translationsService: TranslationsService) {}

  @Get('translate')
  async translate(@Req() request: Request) {
    const { query } = request;
    const translations = await this.translationsService.find(query);
    return translations;
  }

  @Post('add')
  async addTranslation(@Body() addTranslationDto: AddTranslationDto) {
    const translation = await this.translationsService.add(addTranslationDto);
    return translation;
  }
}