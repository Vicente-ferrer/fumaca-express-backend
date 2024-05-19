import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { ApiTags, ApiOperation, ApiBody, ApiResponse } from '@nestjs/swagger';

/**
 * Service responsible for authentication-related operations.
 */
@Injectable()
@ApiTags('auth')
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  /**
   * Validates a user's credentials.
   * @param username - The username of the user.
   * @param pass - The password of the user.
   * @returns A Promise that resolves to the user object if the credentials are valid, otherwise null.
   */
  @ApiOperation({ summary: 'Validate user credentials' })
  @ApiBody({
    schema: {
      properties: { username: { type: 'string' }, pass: { type: 'string' } },
    },
  })
  @ApiResponse({ status: 200, description: 'User validated successfully' })
  @ApiResponse({ status: 401, description: 'Invalid credentials' })
  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  /**
   * Generates an access token for the provided user.
   * @param user - The user object.
   * @returns An object containing the access token.
   */
  @ApiOperation({ summary: 'Generate access token for user' })
  @ApiBody({ schema: { properties: { user: { type: 'object' } } } })
  @ApiResponse({
    status: 201,
    description: 'Access token generated successfully',
  })
  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
