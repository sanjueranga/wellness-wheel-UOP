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
  Request
} from '@nestjs/common';
import { CreateActionPlanDto } from 'src/dto/actionPlan.dto';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { ActionPlanService } from 'src/services/actionPlan.service';


@UseGuards(JwtAuthGuard)
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

  //get action plan by userid
  @UseGuards(JwtAuthGuard)
  @Get()
  @HttpCode(200)
  async getActionPlanByUserId(@Request() req) {
    try {
      const actionplan = await this.actionPlanService.findOne(req.user.userId);
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

  // Create action plan for a user
  @UseGuards(JwtAuthGuard)
  @Post()
  @HttpCode(201)
  @UsePipes(ValidationPipe)
  async createActionPlan(
    @Request() req,
    @Body() createActionPlanDto: CreateActionPlanDto,
  ) {
    try {
      const actionplan = await this.actionPlanService.createActionPlan(
        createActionPlanDto,
        req.user.userId,
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
