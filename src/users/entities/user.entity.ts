import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  /**
   * The unique identifier for the user.
   */
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * The username of the user.
   */
  @Column({ unique: true })
  username: string;

  /**
   * The password of the user.
   */
  @Column()
  password: string;

  // Adicione mais campos conforme necessário
}
