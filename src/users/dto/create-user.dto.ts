import { ApiProperty } from '@nestjs/swagger';

/**
 * Data transfer object for creating a user.
 */
export class CreateUserDto {
  @ApiProperty({ description: 'The username of the user' })
  readonly username: string;

  @ApiProperty({ description: 'The password of the user' })
  readonly password: string;
}
