import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { AuthController } from '../controllers/auth.controller';
import { AuthService } from '../services/auth.service';
import { GoogleStrategy } from '../utils/googleStrategy';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [AuthController],
  providers: [
    AuthService,
    GoogleStrategy, 
  ],
})
export class AuthModule {}
