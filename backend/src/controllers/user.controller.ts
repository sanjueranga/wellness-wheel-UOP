import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  UseGuards,
  Request,
} from '@nestjs/common';
import { UserService } from '../services/user.service';
import { CreateUserDto, EditUserDto } from 'src/dto/user.dto';
import cookie from 'cookie';
import { User } from 'src/entities/user.entity';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  @HttpCode(200)
  async getAllUsers() {
    try {
      const users = await this.userService.getAllUsers();
      return {
        message: 'Users retrieved successfully',
        users,
      };
    } catch (error) {
      return {
        message: 'Failed to retrieve users',
        error: error.message,
      };
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get('one')
  @HttpCode(200)
  async getUserById(@Request() req) {
    try {
      const user = await this.userService.findOne(req.user.userId);
      return {
        message: 'User retrieved successfully',
        user,
      };
    } catch (error) {
      return {
        message: 'Failed to retrieve user',
        error: error.message,
      };
    }
  }

  @Post()
  @HttpCode(201)
  async createUser(@Body() createUserDto: CreateUserDto) {
    try {
      const user = await this.userService.createUser(createUserDto);

      return {
        message: 'User created successfully',
        user,
      };
    } catch (error) {
      return {
        message: 'Failed to create user',
        error: error.message,
      };
    }
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() editUserDto: EditUserDto,
  ): Promise<User | undefined> {
    try {
      return await this.userService.update(id, editUserDto);
    } catch (error) {
      throw new Error(error);
    }
  }
}
