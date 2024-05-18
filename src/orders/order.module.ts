import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersService } from './order.service';
import { OrdersController } from './order.controller';
import { Order } from './entities/order.entity';
import { ProductsModule } from '../product/product.module';

/**
 * Represents the module for managing orders.
 */
@Module({
  imports: [TypeOrmModule.forFeature([Order]), ProductsModule],
  providers: [OrdersService],
  controllers: [OrdersController],
})
export class OrdersModule {}
