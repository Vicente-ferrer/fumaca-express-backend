import { ApiProperty } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderDto } from './create-order.dto';

/**
 * Represents the data transfer object for updating an order.
 * Extends the `CreateOrderDto` class and allows for partial updates.
 */
export class UpdateOrderDto extends PartialType(CreateOrderDto) {
  @ApiProperty({ description: 'The name of the product (optional)' })
  productName?: string;

  @ApiProperty({ description: 'The quantity of the product (optional)' })
  quantity?: number;

  // You can add more properties with ApiProperty to document them
}
