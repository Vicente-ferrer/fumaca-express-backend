import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  /**
   * Create a new user.
   * @param createUserDto - The data for creating a new user.
   * @returns The created user.
   */
  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  /**
   * Find a user by their username.
   * @param username - The username of the user to find.
   * @returns The found user.
   */
  @Get(':username')
  async findOne(@Param('username') username: string) {
    return this.usersService.findOne(username);
  }
}
