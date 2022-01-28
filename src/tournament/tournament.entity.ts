
import { Team } from '../Team/Team.entity';
import { User } from '../user/User.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
/*Criar tabelas*/
@Entity()
export class Tournament {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  dataInicio: Date;
 

  @Column()
  dataFim: Date;

  @Column({length: 500})
  descricao: string;
  
  @Column({length: 500})
  plataformaDeJogo: string;

  @Column({length: 500})
  nickJogador: string;

  @OneToMany(() => User, jogador  => jogador.nickName)
  jogador:User[];

  @OneToMany(() => Team, time => time.nameTeam)
  time: Team[];
}
