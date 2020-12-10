import { Injectable, Request, UseGuards } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/user.entity';
import { RegisterUserDto } from 'src/users/register-user-dto';
import { LoginUserDto } from 'src/users/login-user-dto';
import { LocalAuthGuard } from './local-auth.guard';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  public async validate(userData: LoginUserDto): Promise<User> {
    return await this.usersService.findByEmailAndPassword(
      userData.email,
      userData.password,
    );
  }

  async login(user: User) {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  public async register(user: RegisterUserDto): Promise<User> {
    return this.usersService.create(user);
  }
}
