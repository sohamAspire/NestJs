import { Table, Column, Model } from 'sequelize-typescript';

@Table({
  tableName: 'cars',
  timestamps: true,
  getterMethods: {
    metadata() {
      return JSON.parse(this.getDataValue('metadata'));
    },
  },
  setterMethods: {
    metadata(value) {
      return this.setDataValue('metadata', JSON.stringify(value))
    },
  },
})


export class Car_Model extends Model {
  @Column({ primaryKey: true, unique: true })
  id: string;

  @Column
  brand: string;

  @Column({ unique: true })
  model: string;

  @Column
  metadata: string;

}