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
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import cookie from 'cookie';
import { Submission } from 'src/entities/submission.entity';
import { CreateSubmissonDto } from 'src/dto/submission.dto';
import { SubmissonService } from 'src/services/submission.service';

@Controller('submission')
export class SubmissonController {
  constructor(private submissonService: SubmissonService) {}

  @Get(':id')
  @HttpCode(200)
  async getSubmissonByUserId(@Param('id') userId: number) {
    try {
      const submissions = await this.submissonService.findAll(userId);

      return {
        message: 'Submission retrieved successfully',
        submissions,
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
  @UsePipes(ValidationPipe)
  async createSubmission(@Body() createSubmissionDto: CreateSubmissonDto) {
    try {
      const submission =
        await this.submissonService.createSubmisson(createSubmissionDto);

      return {
        message: 'Submission created successfully',
        submission,
      };
    } catch (error) {
      return {
        message: 'Failed to create submission',
        error: error.message,
      };
    }
  }

  @Put(':id') // Put method for updating submission
  @HttpCode(200)
  @UsePipes(ValidationPipe)
  async updateSubmission(
    @Param('id', ParseIntPipe) submissionId: number,
    @Body() updateSubmissionDto: CreateSubmissonDto,
  ) {
    try {
      const updatedSubmission = await this.submissonService.updateSubmission(
        submissionId,
        updateSubmissionDto,
      );

      return {
        message: 'Submission updated successfully',
        submission: updatedSubmission,
      };
    } catch (error) {
      return {
        message: 'Failed to update submission',
        error: error.message,
      };
    }
  }
}
