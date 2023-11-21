import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto, EditUserDto } from 'src/dto/user.dto';
import { User } from 'src/entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async getAllUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  async createUser(userData: CreateUserDto): Promise<User> {
    const user = this.userRepository.create(userData);
    return this.userRepository.save(user);
  }

  async findOne(id: number): Promise<User | undefined> {
    try {
      return await this.userRepository.findOne({ where: { id } });
    } catch (error) {
      throw new Error(`Failed to fetch user: ${error}`);
    }
  }

  async update(
    id: number,
    updateUserDto: Partial<User>,
  ): Promise<User | undefined> {
    try {
      const user = await this.findOne(id);
      Object.assign(user, updateUserDto);
      return await this.userRepository.save(user);
    } catch (error) {
      throw new Error(`Failed to update user: ${error}`);
    }
  }
}
