import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { MatchFinderResultDto } from './dto/Result.dto';
import { MatchFinderCadastrarDto } from './dto/Matchfinder.creat.dto';
import { Matchfinder } from './matchfinder.entity';


@Injectable()
export class MatchFinderService {
  constructor(
    @Inject('USER_REPOSITORY')
    private teamRepository: Repository<Matchfinder>,
  ) {}


  /*lista todos os usuarios*/
  async listarMatchFinder(): Promise<Matchfinder[]> {
    return this.teamRepository.find();
  }
/*cadastrar user*/
async cadastrarMatchFinder(data: MatchFinderCadastrarDto): Promise<MatchFinderResultDto>{
  let desafio = new Matchfinder()
  desafio.nickJogador =data.nickJogador
  desafio.plataforma =data.plataforma
  

  return this.teamRepository.save(desafio)
  .then((result) => {
    return <MatchFinderResultDto>{
      status: true,
      mensagem: "Game cadastrado com sucesso"
    }
  })
  .catch((error) => {
    return <MatchFinderResultDto>{
      status: false,
      mensagem: "Houve um errro ao cadastrar o game"
    }
  })    
}
}