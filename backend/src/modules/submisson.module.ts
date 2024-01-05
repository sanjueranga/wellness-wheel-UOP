import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubmissonController } from 'src/controllers/submission.controller';
import { Submission } from 'src/entities/submission.entity';
import { SubmissonService } from 'src/services/submission.service';
import { UserModule } from './user.module';

@Module({
  imports: [TypeOrmModule.forFeature([Submission]),UserModule],
  controllers: [SubmissonController],
  providers: [SubmissonService],
})
export class SubmissonModule {}
