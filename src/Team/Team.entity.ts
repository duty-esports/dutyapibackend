import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
/*Criar tabelas*/
@Entity()
export class Team {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nameTeam: string;

  @Column({ length: 100 })
  descricao: string;

}
