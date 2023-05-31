import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  User_ID: number;
  @Column()
  Email: string;
  @Column()
  Active: boolean;
  @Column()
  Password: string;
  @Column()
  User_Name: string;
}
