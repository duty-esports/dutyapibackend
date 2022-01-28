import { Tournament } from '../tournament/tournament.entity';
import { User } from '../user/User.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
/*Criar tabelas*/
@Entity()
export class Team {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nameTeam: string;

  @Column({ length: 100 })
  descricao: string;


  @OneToMany(() => User, jogador => jogador.nickName)
  jogador: User[];

  @OneToMany(() => Tournament, torneios => torneios.nickJogador)
  torneios: Tournament[];
  


}
