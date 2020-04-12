import { Injectable } from '@nestjs/common';
import { UsersService } from "../users/users.service";

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(name: string, password: string): Promise<any> {
    console.log('name', name, password)
    const user = await this.usersService.findOne(name);

    if (user?.password === password) {
      const { password, ...result } = user;
      return result;
    }

    return null;
  }
}
