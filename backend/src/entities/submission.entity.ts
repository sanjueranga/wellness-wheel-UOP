import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Submission {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  emotional: number;

  @Column({ nullable: true })
  physical: number;

  @Column({ nullable: true })
  occupational: number;

  @Column({ nullable: true })
  social: number;

  @Column({ nullable: true })
  spiritual: number;

  @Column({ nullable: true })
  intellectual: number;

  @Column({ nullable: true })
  environmental: number;

  @Column({ nullable: true })
  financial: number;

  @ManyToOne((type) => User, (user) => user.actionPlans) user: User;
}
