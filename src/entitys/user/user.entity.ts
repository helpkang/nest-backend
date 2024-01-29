import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  @ApiProperty({ example: 1, description: 'The unique identifier of the user' })
  id: number;

  @Column()
  @ApiProperty({ example: 'John Doe', description: 'The name of the user' })
  name: string;

  @Column()
  @ApiProperty({
    example: 'john@example.com',
    description: 'The email address of the user',
  })
  email: string;

  @Column({ default: true })
  @ApiProperty({
    example: true,
    description: 'Whether the user is active or not',
  })
  active: boolean;

  @CreateDateColumn({ name: 'create_time' })
  @ApiProperty({
    example: '2022-01-01T12:00:00Z',
    description: 'The creation time of the user',
  })
  createTime: Date;

  @UpdateDateColumn({ name: 'update_time' })
  @ApiProperty({
    example: '2022-01-01T12:30:00Z',
    description: 'The last update time of the user',
  })
  updateTime: Date;
}
