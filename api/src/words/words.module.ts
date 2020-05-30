import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Word } from './word.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Word])]
})
export class WordsModule {}
