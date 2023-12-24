import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from './user.entity';
import { ColumnMetadata } from 'typeorm/metadata/ColumnMetadata';

@Entity()
export class ActionPlan {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  aspects: string;

  @Column({ nullable: true })
  firstAspect: string;

  @Column({ nullable: true })
  whoami: string;

  @Column({ nullable: true })
  whoWantToBe: string;

  @Column({ nullable: true })
  motivation: string;

  @Column({ nullable: true })
  facilitatorsBarriers: string;

  @Column({ nullable: true })
  emotional: string;

  @Column({ nullable: true })
  physical: string;

  @Column({ nullable: true })
  occupational: string;

  @Column({ nullable: true })
  social: string;

  @Column({ nullable: true })
  spiritual: string;

  @Column({ nullable: true })
  intellectual: string;

  @Column({ nullable: true })
  environmental: string;

  @Column({ nullable: true })
  financial: string;

  @Column({ nullable: true })
  startDate: Date;

  @Column({ nullable: true })
  endDate: Date;

  @ManyToOne((type) => User, (user) => user.actionPlans) user: User;
}
