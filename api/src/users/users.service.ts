import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor() {
    this.users = [
      { userId: 1, username: 'Bulat', password: '771992' }
    ]
  }

  async findOne(name: string): Promise<User | undefined> {
    return this.users.find(user => user.username === name);
  }
}
