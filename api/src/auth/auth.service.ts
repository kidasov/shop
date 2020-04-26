import { Injectable } from '@nestjs/common';
import { UsersService } from "../users/users.service";
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private jwtService: JwtService) {}

  async validateUser(name: string, password: string): Promise<any> {
    console.log('name', name, password)
    const user = await this.usersService.findOne(name);

    if (user?.password === password) {
      const { password, ...result } = user;
      return result;
    }

    return null;
  }

  async login(user: any) {
    const payload = {  name: user.username, sub: user.userId}
    return {
      access_token: this.jwtService.sign(payload)
    }
  }
}
