
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
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

}
