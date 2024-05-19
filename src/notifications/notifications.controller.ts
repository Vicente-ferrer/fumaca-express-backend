import { Controller, Post, Body } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { ApiTags, ApiOperation, ApiBody, ApiResponse } from '@nestjs/swagger';

/**
 * Sends a notification with the specified message.
 * @param notificationDto - The notification data transfer object.
 * @returns A Promise that resolves to the result of sending the notification.
 */
@ApiTags('notifications')
@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Post()
  @ApiOperation({ summary: 'Send a notification' })
  @ApiBody({ schema: { properties: { message: { type: 'string' } } } })
  @ApiResponse({ status: 201, description: 'Notification sent successfully' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  sendNotification(@Body() notificationDto: { message: string }) {
    return this.notificationsService.sendNotification(notificationDto.message);
  }
}
