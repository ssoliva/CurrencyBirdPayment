import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table({
    timestamps: false,
    tableName: "payments"
})
export class Payment extends Model<Payment> {
  @Column(DataType.INTEGER)
  amount: number;

  @Column(DataType.STRING)
  email: string;

  @Column(DataType.INTEGER)
  retries: number;

  @Column(DataType.STRING)
  transferCode: string;
}
