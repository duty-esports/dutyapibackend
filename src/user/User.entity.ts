import { Matchfinder } from '../Matchfinder/matchfinder.entity';
import { Team } from '../Team/Team.entity';
import { Tournament } from '../tournament/tournament.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne, ManyToOne, ManyToMany } from 'typeorm';
/*Criar tabelas*/
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  idUser: number;

  @Column({ length: 100 })
  name: string;

  @Column()
  dataDeNascimento: Date;

  @Column({length: 500})
  email: string;

  @Column({length: 500})
  password: string;
  
  @Column({length: 500})
  nickName: string;
  
  @Column({length: 500})
  plataformaDeJogo: string;
  
  @OneToMany(()=> Matchfinder,matchfinder => matchfinder.idMatchfinder)
  matchfinder: Matchfinder[];

  @OneToMany(() => Tournament,torneio => torneio.idTorneio)
  torneio:Tournament[];

  @ManyToOne(() => Team, time => time.idTeam)
  time: Team;

}
