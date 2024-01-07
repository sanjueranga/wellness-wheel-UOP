import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from 'src/dto/user.dto';
import { User } from 'src/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
@Injectable()
@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}
  async validateUser(userData: CreateUserDto): Promise<{ token: string }> {
    const existingUser = await this.userRepository.findOne({
      where: { email: userData.email },
    });

    if (existingUser) {
      return {
        token: await this.jwtService.signAsync({ userId: existingUser.id }),
      };
    } else {
      const newUser = this.userRepository.create(userData);
      await this.userRepository.save(newUser);
      return {
        token: await this.jwtService.signAsync({ userId: newUser.id }),
      };
    }
  }

  async findUser(id: number) {
    const user = await this.userRepository.findOneBy({ id });
    return user;
  }
}
