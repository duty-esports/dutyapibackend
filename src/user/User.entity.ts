
import { Matchfinder } from 'src/Matchfinder/matchfinder.entity';
import { Team } from 'src/Team/Team.entity';
import { Tournament } from 'src/tournament/tournament.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne, ManyToOne, ManyToMany } from 'typeorm';
/*Criar tabelas*/
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

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
  
  @OneToMany(()=> Matchfinder,matchfinder => matchfinder.nickJogador)
  matchfinder: Matchfinder[];

  @OneToMany(() => Tournament,torneio => torneio.nickJogador)
  torneio:Tournament[];

  @ManyToOne(() => Team, time => time.nameTeam)
  time: Team;

}
