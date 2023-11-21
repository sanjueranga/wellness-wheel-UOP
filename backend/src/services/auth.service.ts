import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from 'src/dto/user.dto';
import { User } from 'src/entities/user.entity';

@Injectable()
@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async validateUser(userData: CreateUserDto): Promise<User> {
    const existingUser = await this.userRepository.findOne({
      where: { email: userData.email },
    });

    if (existingUser) {
      return existingUser;
    } else {
      const newUser = this.userRepository.create(userData);
      await this.userRepository.save(newUser);
      return newUser;
    }
  }
  async findUser(id: number) {
    const user = await this.userRepository.findOneBy({ id });
    return user;
  }
}
