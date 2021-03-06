import * as bcrypt from 'bcrypt';
import { Entity, Column, BeforeInsert } from 'typeorm';
import { BaseEntity } from '../main/BaseEntitiy';

// example of an entity you may want to start with
// TODO add class-validators (decorators) + hook in proper TypeORM error reporting
// with ApolloError types

export enum USER_STATUS_MAP {
  ACTIVE = 'USER_ACTIVE',
  BANNED = 'USER_BANNED',
  CLEANED = 'USER_CLEANED' // cleaned for GDPR "forgotten"
}

export enum USER_PERMISSION_MAP {
  PUBLIC = 'PERM_PUBLIC',
  ADMIN = 'PERM_ADMIN'
}

@Entity('users')
export class User extends BaseEntity {
  @Column({ type: 'varchar' })
  password: string;

  @Column({ nullable: true })
  firstName: string;

  @Column({ nullable: true })
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column({ type: 'varchar', default: USER_STATUS_MAP.ACTIVE })
  status: USER_STATUS_MAP;

  @Column({
    type: 'enum',
    enum: USER_PERMISSION_MAP,
    array: true
  })
  permissions: USER_PERMISSION_MAP[];

  @BeforeInsert()
  async hashPasswordBeforeInsert() {
    this.password = await bcrypt.hash(this.password, 11);
  }
}
