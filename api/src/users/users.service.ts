import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { RegisterUserDto } from './register-user-dto';
import * as crypto from 'crypto';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findByEmailAndPassword(email: string, password: string): Promise<User> {
    return await this.usersRepository.findOne({
      where: {
        email,
        password: crypto.createHmac('sha256', password).digest('hex')
      }
    })
  }

  async findById(id: number): Promise<User> {
    return await this.usersRepository.findOne({
      where: {
        id,
      }
    })
  }

  async create(userData: RegisterUserDto): Promise<User> {
    const user = this.usersRepository.create({ ...userData });
    return await this.usersRepository.save(user);
  }
}
