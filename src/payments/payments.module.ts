import { Module } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { PaymentsController } from './payments.controller';

/**
 * Represents the Payments module.
 */
@Module({
  providers: [PaymentsService],
  controllers: [PaymentsController],
})
export class PaymentsModule {}
