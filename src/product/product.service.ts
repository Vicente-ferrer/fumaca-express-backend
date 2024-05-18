import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}

  /**
   * Retrieves all products from the database.
   * @returns A promise that resolves to an array of products.
   */
  async findAll(): Promise<Product[]> {
    return this.productsRepository.find();
  }

  /**
   * Creates a new product in the database.
   * @param product - The product object to be created.
   * @returns A promise that resolves to the created product.
   */
  async create(product: Product): Promise<Product> {
    return this.productsRepository.save(product);
  }
}
