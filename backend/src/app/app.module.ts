import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import dbConfig from './config/db/orm.config';
import { UserModule } from 'src/modules/user.module';
import { AuthModule } from 'src/modules/auth.module';
import { User } from 'src/entities/user.entity';
import { SubmissonModule } from 'src/modules/submisson.module';
import { ActionPlanModule } from 'src/modules/actionPlan.module';
import { Submission } from 'src/entities/submission.entity';
import { ActionPlan } from 'src/entities/actionPlan.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      ...dbConfig(),
      entities:[User,Submission,ActionPlan]
    }),
    UserModule,
    AuthModule,
    SubmissonModule,
    ActionPlanModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
