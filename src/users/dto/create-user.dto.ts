/**
 * Data transfer object for creating a user.
 */
export class CreateUserDto {
  /**
   * The username of the user.
   */
  readonly username: string;

  /**
   * The password of the user.
   */
  readonly password: string;
}
