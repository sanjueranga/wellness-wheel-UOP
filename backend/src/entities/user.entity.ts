import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ActionPlan } from './actionPlan.entity';
import { Submission } from './submission.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  picture: string;

  @Column({ nullable: true })
  occupation: string;

  @OneToMany((type) => ActionPlan, (actionPlan) => actionPlan.user)
  actionPlans: ActionPlan[];

  @OneToMany((type) => Submission, (submisson) => submisson.user)
  submisson: Submission[];
}
