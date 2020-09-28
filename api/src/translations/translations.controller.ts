import { Controller, Get, Body } from "@nestjs/common";
import { TranslationsService } from "./translations.service";
import { FindTranslationDto } from "./find-translation-dto";

@Controller('translations')
export class TranslationsController {
  constructor(private translationsService: TranslationsService) {}

  @Get('translate')
  async translate(@Body() findTranslationDto: FindTranslationDto) {
    const translations = await this.translationsService.find(findTranslationDto);
    console.log('translations', translations);
    return translations;
  }
}