import { Injectable } from '@nestjs/common';
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
}
