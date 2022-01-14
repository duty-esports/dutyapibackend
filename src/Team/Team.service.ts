import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { TeamResultDto } from './dto/Result.dto';
import { TeamCadastrarDto } from './dto/Team.creat.dto';
import { Team } from './Team.entity';


@Injectable()
export class TeamService {
  constructor(
    @Inject('USER_REPOSITORY')
    private teamRepository: Repository<Team>,
  ) {}


  /*lista todos os usuarios*/
  async listarTeam(): Promise<Team[]> {
    return this.teamRepository.find();
  }
/*cadastrar user*/
async cadastrarTeam(data: TeamCadastrarDto): Promise<TeamResultDto>{
  let team = new Team()
  team.nameTeam =data.nameTeam
  team.descricao =data.descricao
  

  return this.teamRepository.save(team)
  .then((result) => {
    return <TeamResultDto>{
      status: true,
      mensagem: "Game cadastrado com sucesso"
    }
  })
  .catch((error) => {
    return <TeamResultDto>{
      status: false,
      mensagem: "Houve um errro ao cadastrar o game"
    }
  })    
}
}