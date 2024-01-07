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
  Request,
} from '@nestjs/common';
import cookie from 'cookie';
import { Submission } from 'src/entities/submission.entity';
import { CreateSubmissonDto } from 'src/dto/submission.dto';
import { SubmissonService } from 'src/services/submission.service';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';

@Controller('submission')
export class SubmissonController {
  constructor(private submissionService: SubmissonService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  @HttpCode(200)
  async getSubmissonByUserId(@Request() req) {
    try {
      const submissions = await this.submissionService.findAll(req.user.userId);

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

  @UseGuards(JwtAuthGuard)
  @Post()
  @HttpCode(201)
  @UsePipes(ValidationPipe)
  async createSubmission(
    @Request() req,
    @Body() createSubmissionDto: CreateSubmissonDto,
  ) {
    try {
      const submission = await this.submissionService.createSubmission(
        createSubmissionDto,
        req.user.userId,
      );

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

  // @Put(':id')
  // @HttpCode(200)
  // @UsePipes(ValidationPipe)
  // async updateSubmission(
  //   @Param('id', ParseIntPipe) submissionId: number,
  //   @Body() updateSubmissionDto: CreateSubmissonDto,
  // ) {
  //   try {
  //     const updatedSubmission = await this.submissonService.updateSubmission(
  //       submissionId,
  //       updateSubmissionDto,
  //     );

  //     return {
  //       message: 'Submission updated successfully',
  //       submission: updatedSubmission,
  //     };
  //   } catch (error) {
  //     return {
  //       message: 'Failed to update submission',
  //       error: error.message,
  //     };
  //   }
  // }
}
