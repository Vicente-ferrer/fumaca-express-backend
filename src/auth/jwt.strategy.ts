import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import {
  ApiTags,
  ApiOperation,
  ApiBearerAuth,
  ApiResponse,
} from '@nestjs/swagger';

/**
 * JwtStrategy class that extends PassportStrategy.
 * This class is responsible for validating JWT tokens.
 */
@Injectable()
@ApiTags('auth')
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'yourSecretKey',
    });
  }

  /**
   * Validates the payload of the JWT token.
   * @param payload - The payload of the JWT token.
   * @returns An object containing the userId and username extracted from the payload.
   */
  @ApiOperation({ summary: 'Validate JWT token' })
  @ApiBearerAuth()
  @ApiResponse({ status: 200, description: 'JWT token validated successfully' })
  @ApiResponse({ status: 401, description: 'Invalid token' })
  async validate(payload: any) {
    return { userId: payload.sub, username: payload.username };
  }
}
