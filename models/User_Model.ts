import { Table, Column, Model } from 'sequelize-typescript';

@Table({ tableName: 'users', timestamps: true })
export class User_Model extends Model {
  @Column({ primaryKey: true, unique: true })
  id: string;

  @Column
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  phone: bigint;

  @Column
  active: boolean;
}
