import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'
import { Owner } from '../user/owner.entity'

export enum StoreStatus {
  OPENED = 0,
  CLOSED = 1,
  TEMPORARY_CLOSED = 2,
}

@Entity()
export class Store {
  @PrimaryGeneratedColumn()
  id: number
  @Column()
  name: string
  @Column()
  status: StoreStatus
  @ManyToOne(() => Owner, (owner) => owner.id)
  owner: Owner
  @Column()
  ownerId: number
  @Column()
  openDate: Date
  @Column({ nullable: true })
  closeDate: Date
  @CreateDateColumn()
  createdAt: Date
  @UpdateDateColumn()
  updatedAt: Date
}
