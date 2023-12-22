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
} from '@nestjs/common';
import cookie from 'cookie';
import { Submisson } from 'src/entities/submission.entity';
import { CreateSubmissonDto } from 'src/dto/submission.dto';
import { SubmissonService } from 'src/services/submission.service';

@Controller('submisson')
export class SubmissonController {
  constructor(private submissonService: SubmissonService) {}

  @Get(':id')
  @HttpCode(200)
  async getSubmissonByUserId(@Param('id') userId: number) {
    try {
      const submission = await this.submissonService.findOne(userId);
      return {
        message: 'Submission retrieved successfully',
        submission,
      };
    } catch (error) {
      return {
        message: 'Failed to retrieve submission',
        error: error.message,
      };
    }
  }

  @Post()
  @HttpCode(201)
  async createSubmission(@Body() createSubmissionDto: CreateSubmissonDto) {
    try {
      const submission = await this.submissonService.createSubmisson(createSubmissionDto);

      return {
        message: 'Submisson created successfully',
        submission,
      };
    } catch (error) {
      return {
        message: 'Failed to create submission',
        error: error.message,
      };
    }
  }

}
