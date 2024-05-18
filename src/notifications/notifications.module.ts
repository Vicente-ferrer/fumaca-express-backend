import { Module } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { NotificationsController } from './notifications.controller';

/**
 * Module for handling notifications.
 */
@Module({
  providers: [NotificationsService],
  controllers: [NotificationsController],
})
export class NotificationsModule {}
