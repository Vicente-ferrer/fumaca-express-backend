import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  /**
   * The unique identifier for the user.
   * @type {number}
   */
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * The username of the user.
   * @type {string}
   */
  @Column({ unique: true })
  username: string;

  /**
   * The password of the user.
   * @type {string}
   */
  @Column()
  password: string;

  // Adicione mais campos conforme necessário
}
