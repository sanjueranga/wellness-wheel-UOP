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
import { CreateActionPlanDto } from 'src/dto/actionPlan.dto';
import { ActionPlanService } from 'src/services/actionPlan.service';

@Controller('action-plan')
export class ActionPlanController {
  constructor(private actionPlanService: ActionPlanService) {}
  @Get()
  @HttpCode(200)
  async getAllPlans() {
    try {
      const actionPlans = await this.actionPlanService.getAllPlans();
      return {
        message: 'action plans retrieved successfully',
        actionPlans,
      };
    } catch (error) {
      return {
        message: 'Failed to retrieve action plans',
        error: error.message,
      };
    }
  }

  @Get(':id')
  @HttpCode(200)
  async getActionPlanByUserId(@Param('id') userId: number) {
    try {
      const actionplan = await this.actionPlanService.findOne(userId);
      return {
        message: 'actionplan retrieved successfully',
        actionplan,
      };
    } catch (error) {
      return {
        message: 'Failed to retrieve action plan',
        error: error.message,
      };
    }
  }

  @Post()
  @HttpCode(201)
  @UsePipes(ValidationPipe)
  async createActionPlan(
    @Param('id') userId: number,
    @Body() createActionPlanDto: CreateActionPlanDto,
  ) {
    try {
      const actionplan = await this.actionPlanService.createActionPlan(
        createActionPlanDto,
        userId,
      );
      console.log(createActionPlanDto);
      return {
        message: 'action plan created successfully',
        actionplan,
      };
    } catch (error) {
      return {
        message: 'Failed to create action plan',
        error: error.message,
      };
    }
  }
}
