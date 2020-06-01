import { Module } from "@nestjs/common";
import { LanguageService } from './languages.service';
import { Language } from './language.entity';
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([Language])],
  providers: [LanguageService],
  exports: [LanguageService]
})

export class LanguagesModule {}