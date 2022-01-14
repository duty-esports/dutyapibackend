import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
/*Criar tabelas*/
@Entity()
export class Game {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nameGame: string;

  @Column()
  versaoGame: number;

}
