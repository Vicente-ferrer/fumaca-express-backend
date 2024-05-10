import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { CostumerModule } from './costumer/costumer.module';

@Module({
  imports: [ProductModule, OrderModule, CostumerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
