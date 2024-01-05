import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ActionPlan } from 'src/entities/actionPlan.entity';
import { Repository } from 'typeorm';
import { UserService } from './user.service';

@Injectable()
export class ActionPlanService {
  constructor(
    @InjectRepository(ActionPlan)
    private readonly actionPlanRepository: Repository<ActionPlan>,
    private userService:UserService
  ) {}

  async createActionPlan(
    actionPlanData: Partial<ActionPlan>,
    id:number
  ): Promise<ActionPlan> {
    actionPlanData.user= await this.userService.findOne(id)
    const actionplan = this.actionPlanRepository.create(actionPlanData);
    return this.actionPlanRepository.save(actionplan);
  }

  async findOne(userId: number): Promise<ActionPlan[] | undefined> {
    try {
      return await this.actionPlanRepository.find({
        where: { user: { id: userId } },
      });
    } catch (error) {
      throw new Error(`Failed to fetch Action plans: ${error}`);
    }
  }

  async getAllPlans(): Promise<ActionPlan[]> {
    return this.actionPlanRepository.find();
  }
}
