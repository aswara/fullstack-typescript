import {
  Table,
  Column,
  Model,
  DataType,
  IsEmail,
  Unique,
} from 'sequelize-typescript';

@Table({
  tableName: 'users',
})
export class UserEntity extends Model {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id: string;

  @Column
  name: string;

  @Unique
  @IsEmail
  @Column
  email: string;

  @Column
  password: string;

  @Column
  picture: string;
}
