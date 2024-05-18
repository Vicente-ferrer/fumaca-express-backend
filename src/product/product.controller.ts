import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProductsService } from './product.service';
import { Product } from './entities/product.entity';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  /**
   * Retrieves all products.
   * @returns {Promise<Product[]>} A promise that resolves to an array of products.
   */
  @Get()
  async findAll() {
    return this.productsService.findAll();
  }

  /**
   * Creates a new product.
   * @param {Product} product - The product object to be created.
   * @returns {Promise<Product>} A promise that resolves to the created product.
   */
  @Post()
  async create(@Body() product: Product) {
    return this.productsService.create(product);
  }
}
