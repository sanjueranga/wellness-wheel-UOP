import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubmissonController } from 'src/controllers/submission.controller';
import { Submission } from 'src/entities/submission.entity';
import { SubmissonService } from 'src/services/submission.service';

@Module({
  imports: [TypeOrmModule.forFeature([Submission])],
  controllers: [SubmissonController],
  providers: [SubmissonService],
})
export class SubmissonModule {}
