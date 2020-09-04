import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Translation } from "./translation.entity";
import { TranslationsService } from "./translations.service";
import { WordsModule } from "src/words/words.module";

@Module({
  imports: [TypeOrmModule.forFeature([Translation]), WordsModule],
  providers: [TranslationsService],
  exports: [TranslationsService]
})
export class TranslationsModule {}