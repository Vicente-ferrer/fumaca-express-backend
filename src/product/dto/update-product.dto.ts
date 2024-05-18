import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';

/**
 * Represents the data transfer object for updating a product.
 * It extends the `CreateProductDto` class and allows partial updates.
 */
export class UpdateProductDto extends PartialType(CreateProductDto) {}
