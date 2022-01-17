import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
/*Criar tabelas*/
@Entity()
export class Matchfinder {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nickJogador: string;
  

  @Column({ length: 100 })
  plataforma: string;

}
