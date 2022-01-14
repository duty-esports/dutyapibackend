
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
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

}
