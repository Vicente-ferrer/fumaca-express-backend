import { Controller, Get, Post, Body } from '@nestjs/common';
import { OrdersService } from './order.service';
import { Order } from './entities/order.entity';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  /**
   * Retrieves all orders.
   * @returns A promise that resolves to an array of orders.
   */
  @Get()
  async findAll() {
    return this.ordersService.findAll();
  }

  /**
   * Creates a new order.
   * @param order - The order object to be created.
   * @returns A promise that resolves to the created order.
   */
  @Post()
  async create(@Body() order: Order) {
    return this.ordersService.create(order);
  }
}
