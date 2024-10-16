import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  /**
   * The unique identifier of the product.
   */
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * The name of the product.
   */
  @Column()
  name: string;

  /**
   * The price of the product.
   */
  @Column('decimal')
  price: number;

  // Adicione mais campos conforme necessário
}
