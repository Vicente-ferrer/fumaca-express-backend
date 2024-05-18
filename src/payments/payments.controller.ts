import { Controller, Post, Body } from '@nestjs/common';
import { PaymentsService } from './payments.service';

/**
 * Process a payment for an order.
 * @param paymentDto - The payment data including the orderId and amount.
 * @returns A Promise that resolves to the result of the payment processing.
 */
@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post()
  processPayment(@Body() paymentDto: { orderId: number; amount: number }) {
    return this.paymentsService.processPayment(
      paymentDto.orderId,
      paymentDto.amount,
    );
  }
}
