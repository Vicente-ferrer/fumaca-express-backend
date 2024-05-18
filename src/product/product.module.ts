import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsService } from './product.service';
import { ProductsController } from './product.controller';
import { Product } from './entities/product.entity';

/**
 * Represents the module for managing products.
 */
@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  providers: [ProductsService],
  controllers: [ProductsController],
})
export class ProductsModule {}
