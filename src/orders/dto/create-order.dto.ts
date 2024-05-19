import { ApiProperty } from '@nestjs/swagger';

/**
 * Represents the data transfer object for creating an order.
 */
export class CreateOrderDto {
  @ApiProperty({ description: 'The name of the product' })
  productName: string;

  @ApiProperty({ description: 'The quantity of the product' })
  quantity: number;

  // You can add more properties with ApiProperty to document them
}
