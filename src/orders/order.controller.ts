import { Controller, Get, Post, Body } from '@nestjs/common';
import { OrdersService } from './order.service';
import { Order } from './entities/order.entity';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';

@ApiTags('orders')
@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  /**
   * Retrieves all orders.
   * @returns A promise that resolves to an array of orders.
   */
  @Get()
  @ApiOperation({ summary: 'Retrieve all orders' })
  @ApiResponse({
    status: 200,
    description: 'Retrieved all orders successfully',
    type: Order,
    isArray: true,
  })
  async findAll() {
    return this.ordersService.findAll();
  }

  /**
   * Creates a new order.
   * @param order - The order object to be created.
   * @returns A promise that resolves to the created order.
   */
  @Post()
  @ApiOperation({ summary: 'Create a new order' })
  @ApiBody({ type: Order })
  @ApiResponse({
    status: 201,
    description: 'Order created successfully',
    type: Order,
  })
  async create(@Body() order: Order) {
    return this.ordersService.create(order);
  }
}
