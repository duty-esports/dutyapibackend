import { User } from '../user/User.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
/*Criar tabelas*/
@Entity()
export class Matchfinder {
  @PrimaryGeneratedColumn()
  idMatchfinder: number;

  @Column({ length: 100 })
  nickJogador: string;
  

  @Column({ length: 100 })
  plataforma: string;

  @OneToMany(()=> User, usuario => usuario.nickName)
  usuario: User;

}
