import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

/**
 * JwtStrategy class that extends PassportStrategy.
 * This class is responsible for validating JWT tokens.
 */
@Injectable()
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
  async validate(payload: any) {
    return { userId: payload.sub, username: payload.username };
  }
}
