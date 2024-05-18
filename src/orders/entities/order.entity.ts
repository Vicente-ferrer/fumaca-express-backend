import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Product } from '../../product/entities/product.entity';

@Entity()
export class Order {
  /**
   * The unique identifier of the order.
   */
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * The user who placed the order.
   */
  @ManyToOne(() => User, (user) => user.id)
  user: User;

  /**
   * The product associated with the order.
   */
  @ManyToOne(() => Product, (product) => product.id)
  product: Product;

  /**
   * The quantity of the product in the order.
   */
  @Column()
  quantity: number;

  /**
   * The total price of the order.
   */
  @Column('decimal')
  total: number;

  // Adicione mais campos conforme necessário
}
