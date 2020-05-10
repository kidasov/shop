import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User as UserEntity } from './user.enity';
import { Repository } from 'typeorm';


export type User = any;

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>
    ) {
    this.users = [
      { userId: 1, username: 'Bulat', password: '771992' }
    ]
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }

  async findOne(name: string): Promise<User | undefined> {
    return this.users.find(user => user.username === name);
  }
}
