import { Injectable } from '@nestjs/common';

/**
 * Sends a notification with the specified message.
 *
 * @param message - The message to be included in the notification.
 * @returns A string indicating that the notification has been sent.
 */
@Injectable()
export class NotificationsService {
  sendNotification(message: string): string {
    // Integre com um serviço de notificações real (e.g., email, SMS, push notifications)
    return `Notificação enviada: ${message}`;
  }
}
