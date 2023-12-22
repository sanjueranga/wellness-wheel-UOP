import { IsOptional, IsString, IsDate, IsNumber, IsNotEmpty } from 'class-validator';

export class CreateActionPlanDto {
  @IsOptional()
  @IsString()
  aspects?: string;

  @IsOptional()
  @IsString()
  firstAspect?: string;

  @IsOptional()
  @IsString()
  whoami?: string;

  @IsOptional()
  @IsString()
  whoWantToBe?: string;

  @IsOptional()
  @IsString()
  motivation?: string;

  @IsOptional()
  @IsString()
  facilitatorsBarriers?: string;

  @IsOptional()
  @IsString()
  emotional?: string;

  @IsOptional()
  @IsString()
  physical?: string;

  @IsOptional()
  @IsString()
  occupational?: string;

  @IsOptional()
  @IsString()
  social?: string;

  @IsOptional()
  @IsString()
  spiritual?: string;

  @IsOptional()
  @IsString()
  intellectual?: string;

  @IsOptional()
  @IsString()
  environmental?: string;

  @IsOptional()
  @IsString()
  financial?: string;

  @IsOptional()
  @IsDate()
  startDate?: Date;

  @IsOptional()
  @IsDate()
  endDate?: Date;

  @IsNotEmpty()
  userId?: number;
}
