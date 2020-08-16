import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Word } from './word.entity';
import { WordService } from './words.service';

@Module({
  imports: [TypeOrmModule.forFeature([Word])],
  providers: [WordService],
  exports: [WordService]
})
export class WordsModule {}
