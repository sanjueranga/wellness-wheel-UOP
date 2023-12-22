import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubmissonController } from 'src/controllers/submission.controller';
import { Submisson } from 'src/entities/submission.entity';
import { SubmissonService } from 'src/services/submission.service';

@Module({
  imports: [TypeOrmModule.forFeature([Submisson])],
  controllers: [SubmissonController],
  providers: [SubmissonService],
})
export class SubmissonModule {}
