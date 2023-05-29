import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateUserInput, UpdateUserInput } from './dto';
import { User } from './entities';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(id: number): Promise<User> {
    // @ts-ignore
    return this.userRepository.findOneOrFail(id);
  }

  async create(createUserInput: CreateUserInput): Promise<User> {
    return this.userRepository.save(createUserInput);
  }

  async update(id: number, updateUserInput: UpdateUserInput): Promise<User> {
    // @ts-ignore
    const user = await this.userRepository.findOne(id);
    return this.userRepository.save({ ...user, ...updateUserInput });
  }

  async remove(id: number): Promise<User> {
    // @ts-ignore
    const user = await this.userRepository.findOne(id);
    return this.userRepository.remove(user);
  }
}
