import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'
import { Store } from '../store/store.entity'

export enum OwnerStatus {
  REGISTERED = 0,
  WITHDRAWAL = 1,
  LOCK = 2,
}

@Entity()
export class Owner {
  @PrimaryGeneratedColumn()
  id: number
  @Column({ type: 'varchar', name: 'name', length: 50 })
  name: string
  @Column({ type: 'varchar', name: 'email', length: 255 })
  email: string
  @Column({ type: 'varchar', name: 'password', length: 255 })
  password: string
  @Column({ type: 'tinyint', name: 'status' })
  status: OwnerStatus
  @CreateDateColumn()
  createdAt: Date
  @UpdateDateColumn()
  updatedAt: Date

  @OneToMany(() => Store, (store: Store) => store.id)
  store: Store
}
