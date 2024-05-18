import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderDto } from './create-order.dto';

/**
 * Represents the data transfer object for updating an order.
 * Extends the `CreateOrderDto` class and allows for partial updates.
 */
export class UpdateOrderDto extends PartialType(CreateOrderDto) {}
