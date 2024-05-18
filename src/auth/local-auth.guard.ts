import { Injectable, ExecutionContext } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

/**
 * Custom authentication guard for local authentication.
 * Extends the built-in AuthGuard class and overrides the canActivate method.
 */
@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  /**
   * Determines if the current request is authorized to access the protected route.
   * Overrides the canActivate method of the parent class.
   * @param context - The execution context of the current request.
   * @returns A promise that resolves to a boolean indicating if the request is authorized.
   */
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const result = (await super.canActivate(context)) as boolean;
    const request = context.switchToHttp().getRequest();
    await super.logIn(request);
    return result;
  }
}
