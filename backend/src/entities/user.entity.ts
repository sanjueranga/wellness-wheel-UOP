import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
