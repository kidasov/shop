import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { RegisterUserDto } from './register-user-dto';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findByEmail(email: string): Promise<User> {
    return await this.usersRepository.findOne({
      where: {
        email,
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

  async create(user: RegisterUserDto): Promise<User> {
    return await this.usersRepository.save(user);
  }
}
