import { Injectable, ExecutionContext } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
  ApiTags,
  ApiOperation,
  ApiBearerAuth,
  ApiResponse,
} from '@nestjs/swagger';

/**
 * Custom authentication guard for local authentication.
 * Extends the built-in AuthGuard class and overrides the canActivate method.
 */
@Injectable()
@ApiTags('auth')
export class LocalAuthGuard extends AuthGuard('local') {
  /**
   * Determines if the current request is authorized to access the protected route.
   * Overrides the canActivate method of the parent class.
   * @param context - The execution context of the current request.
   * @returns A promise that resolves to a boolean indicating if the request is authorized.
   */
  @ApiOperation({ summary: 'Authorize request using local authentication' })
  @ApiBearerAuth()
  @ApiResponse({ status: 200, description: 'Request authorized successfully' })
  @ApiResponse({ status: 401, description: 'Unauthorized request' })
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const result = (await super.canActivate(context)) as boolean;
    const request = context.switchToHttp().getRequest();
    await super.logIn(request);
    return result;
  }
}
