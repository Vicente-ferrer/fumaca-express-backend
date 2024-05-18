import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './entities/user.entity';

/**
 * Represents the Users module of the application.
 * This module provides functionality related to users, including importing the TypeOrmModule for the User entity,
 * providing the UsersService, UsersController, and exporting the UsersService for use in other modules.
 */
@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
