import { Controller, Post, Body } from '@nestjs/common';
import { NotificationsService } from './notifications.service';

/**
 * Sends a notification with the specified message.
 * @param notificationDto - The notification data transfer object.
 * @returns A Promise that resolves to the result of sending the notification.
 */
@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Post()
  sendNotification(@Body() notificationDto: { message: string }) {
    return this.notificationsService.sendNotification(notificationDto.message);
  }
}
