import { Injectable } from '@nestjs/common';

/**
 * Process a payment for a given order.
 *
 * @param orderId - The ID of the order.
 * @param amount - The amount to be paid.
 * @returns A string indicating the success of the payment process.
 */
@Injectable()
export class PaymentsService {
  processPayment(orderId: number, amount: number): string {
    // Integre com um gateway de pagamento real
    return `Pagamento de R$${amount} para o pedido ${orderId} processado com sucesso.`;
  }
} // Add closing curly brace here
