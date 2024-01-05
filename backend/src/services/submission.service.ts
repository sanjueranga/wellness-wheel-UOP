import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSubmissonDto } from 'src/dto/submission.dto';
import { Submission } from 'src/entities/submission.entity';

@Injectable()
export class SubmissonService {
  constructor(
    @InjectRepository(Submission)
    private readonly submissionRepository: Repository<Submission>,
  ) {}

  async createSubmisson(
    submissionData: CreateSubmissonDto,
  ): Promise<Submission> {
    const submission = this.submissionRepository.create(submissionData);
    return this.submissionRepository.save(submission);
  }

  async findAll(userId: number): Promise<Submission[] | undefined> {
    try {
      return this.submissionRepository.find({
        where: { user: { id: userId } },
      });
    } catch (error) {
      throw new Error(`Failed to fetch user: ${error}`);
    }
  }

  async findOne(id: number): Promise<Submission | undefined> {
    try {
      return this.submissionRepository.findOne({ where: { id } });
    } catch (error) {
      throw new Error(`Failed to fetch submission: ${error}`);
    }
  }

  async updateSubmission(
    submissionId: number,
    updateSubmissionDto: Partial<CreateSubmissonDto>,
  ): Promise<Submission | undefined> {
    try {
      const submission = await this.findOne(submissionId);
      if (!submission) {
        throw new NotFoundException(
          `Submission with ID ${submissionId} not found`,
        );
      }
      Object.assign(submission, updateSubmissionDto);
      return this.submissionRepository.save(submission);
    } catch (error) {
      throw new Error(`Failed to update submission: ${error}`);
    }
  }
}
