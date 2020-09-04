import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Word } from './word.entity';
import { WordsService } from './words.service';
import { LanguagesModule } from 'src/languages/languages.module';

@Module({
  imports: [TypeOrmModule.forFeature([Word]), LanguagesModule],
  providers: [WordsService],
  exports: [WordsService],
})
export class WordsModule {}
