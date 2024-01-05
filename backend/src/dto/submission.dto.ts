import {
  IsEmail,
  IsOptional,
  IsString,
  IsNumber,
  IsNotEmpty,
} from 'class-validator';
import { User } from 'src/entities/user.entity';

export class CreateSubmissonDto {
  @IsNumber()
  @IsOptional()
  emotional?: number;

  @IsNumber()
  @IsOptional()
  physical?: number;

  @IsNumber()
  @IsOptional()
  occupational?: number;

  @IsNumber()
  @IsOptional()
  social?: number;

  @IsNumber()
  @IsOptional()
  spiritual?: number;

  @IsNumber()
  @IsOptional()
  intellectual?: number;

  @IsNumber()
  @IsOptional()
  environmental?: number;

  @IsNumber()
  @IsOptional()
  financial?: number;

  @IsNotEmpty()
  user?: User;
}
