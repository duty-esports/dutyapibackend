import { Team } from '../Team/Team.entity';
import { Tournament } from '../tournament/tournament.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
/*Criar tabelas*/
@Entity()
export class Game {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nameGame: string;

  @Column()
  versaoGame: number;

  @OneToMany(() => Tournament, torneios => torneios.descricao)
  torneios: Tournament[];

  @OneToMany(() => Team, time => time.nameTeam)
  time: Team[];

}
