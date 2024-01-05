import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActionPlanController } from 'src/controllers/actionPlan.controller';
import { ActionPlan } from 'src/entities/actionPlan.entity';
import { ActionPlanService } from 'src/services/actionPlan.service';
import { UserModule } from './user.module';

@Module({
  imports: [TypeOrmModule.forFeature([ActionPlan]),UserModule],
  controllers: [ActionPlanController],
  providers: [ActionPlanService],
})
export class ActionPlanModule {}
