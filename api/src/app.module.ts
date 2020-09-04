import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/products.controller';
import { LanguagesController } from './languages/languages.controller';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { User } from './users/user.enity';
import { Word } from './words/word.entity';
import { Translation } from './translations/translation.entity';
import { Language } from './languages/language.entity';
import { LanguagesModule } from './languages/languages.module';
import { TranslationsController } from './translations/translations.controller';
import { TranslationsModule } from './translations/translations.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    LanguagesModule,
    TranslationsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres',
      port: 5432,
      username: 'postgres',
      password: 'example',
      database: 'postgres',
      entities: [User, Language, Translation, Word],
      synchronize: true,
    }),
  ],
  controllers: [
    AppController,
    LanguagesController,
    ProductsController,
    TranslationsController,
  ],
  providers: [AppService],
})
export class AppModule {}
