import { Table, Column, Model, DataType, Default } from 'sequelize-typescript';

// nombre de la tabla
@Table({
  tableName: "products"
})
class Product extends Model {
  @Column({
    type: DataType.STRING(30)
  })
  declare name: string;

  @Column({
    type: DataType.FLOAT
  })
  declare price: number;

  @Default(true)
  @Column({
    type: DataType.BOOLEAN
  })
  declare availability: boolean;
}

export default Product