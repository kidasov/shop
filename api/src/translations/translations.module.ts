import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Translation } from "./translation.entity";
import { TranslationsService } from "./translations.service";

@Module({
  imports: [TypeOrmModule.forFeature([Translation])],
  providers: [TranslationsService],
  exports: [TranslationsService]
})
export class TranslationsModule {}