import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secretOrPrivateKey: 'secret123456789',
    }),
  ],
  providers: [UsersService]
})
export class AuthModule {}
