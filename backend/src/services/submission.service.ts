import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSubmissonDto} from 'src/dto/submission.dto';
import { Submisson } from 'src/entities/submission.entity';

@Injectable()
export class SubmissonService {
  constructor(
    @InjectRepository(Submisson)
    private readonly submissonRepository: Repository<Submisson>,
  ) {}

  async createSubmisson(submissionData: CreateSubmissonDto): Promise<Submisson> {
    const submission = this.submissonRepository.create(submissionData);
    return this.submissonRepository.save(submission);
  }

  async findOne(userId: number): Promise<Submisson[] | undefined> {
    try {
      return this.submissonRepository.find({
        where: { user: { id: userId } },
      });
    } catch (error) {
      throw new Error(`Failed to fetch user: ${error}`);
    }
  }
}
