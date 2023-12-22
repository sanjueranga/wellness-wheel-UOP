import { IsEmail, IsOptional, IsString, IsNumber } from 'class-validator';

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
}

