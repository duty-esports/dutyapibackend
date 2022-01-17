
import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { TournamentResultDto } from './dto/Result.dto';
import { TournamentCadastrarDto } from './dto/tournament.create.dto';
import { Tournament } from './tournament.entity';


@Injectable()
export class TournamentService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<Tournament>,
  ) {}


  /*lista todos os usuarios*/
  async listar(): Promise<Tournament[]> {
    return this.userRepository.find();
  }
/*cadastrar user*/
async cadastrar(data: TournamentCadastrarDto): Promise<TournamentResultDto>{
  let torneio = new Tournament()
  torneio.dataInicio = data.dataInicio
  torneio.dataFim = data.dataFim
  torneio.descricao = data.descricao
  torneio.plataformaDeJogo = data.plataformaDeJogo
 

  return this.userRepository.save(torneio)
  .then((result) => {
    return <TournamentResultDto>{
      status: true,
      mensagem: "Usuário cadastrado com sucesso"
    }
  })
  .catch((error) => {
    return <TournamentResultDto>{
      status: false,
      mensagem: "Houve um errro ao cadastrar o usuário"
    }
  })    
}
}
