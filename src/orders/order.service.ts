import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './entities/order.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private ordersRepository: Repository<Order>,
  ) {}

  /**
   * Retrieves all orders from the database.
   * @returns A promise that resolves to an array of Order objects.
   */
  async findAll(): Promise<Order[]> {
    return this.ordersRepository.find();
  }

  /**
   * Creates a new order in the database.
   * @param order - The order object to be created.
   * @returns A promise that resolves to the created Order object.
   */
  async create(order: Order): Promise<Order> {
    return this.ordersRepository.save(order);
  }
}
