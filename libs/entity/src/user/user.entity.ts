import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

export enum UserStatus {
  REGISTERED = 0,
  WITHDRAWAL = 1,
  LOCK = 2,
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number
  @Column({ type: 'varchar', name: 'name', length: 50 })
  name: string
  @Column({ type: 'varchar', name: 'email', length: 255 })
  email: string
  @Column({ type: 'varchar', name: 'password', length: 255 })
  password: string
  @Column({ type: 'tinyint', name: 'status' })
  status: UserStatus
  @CreateDateColumn()
  createdAt: Date
  @UpdateDateColumn()
  updatedAt: Date
}
