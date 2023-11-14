import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { UserService } from '../services/user.service';
import { CreateUserDto, EditUserDto } from 'src/dto/user.dto';
import cookie from 'cookie';


@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

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

  
}
