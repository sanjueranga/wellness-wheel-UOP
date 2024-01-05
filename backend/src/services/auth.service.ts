import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from 'src/dto/user.dto';
import { User } from 'src/entities/user.entity';
import { generateJwtToken } from 'src/utils/jwt.utils';
@Injectable()
@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}
  async validateUser(
    userData: CreateUserDto,
  ): Promise<{ user: User; token: string }> {
    const existingUser = await this.userRepository.findOne({
      where: { email: userData.email },
    });

    if (existingUser) {
      const token = generateJwtToken({
        userID: existingUser.id,
        email: existingUser.email,
      });
      return { user: existingUser, token };
    } else {
      const newUser = this.userRepository.create(userData);
      await this.userRepository.save(newUser);
      const token = generateJwtToken({
        userID: newUser.id,
        email: newUser.email,
      });
      return { user: newUser, token };
    }
  }

  async findUser(id: number) {
    const user = await this.userRepository.findOneBy({ id });
    return user;
  }
}