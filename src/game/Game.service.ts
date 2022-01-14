import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { GameResultDto } from './dto/Result.dto';
import { GameCadastrarDto } from './dto/Game.create.dto';
import { Game } from './Game.entity';


@Injectable()
export class GameService {
  constructor(
    @Inject('USER_REPOSITORY')
    private gameRepository: Repository<Game>,
  ) {}


  /*lista todos os usuarios*/
  async listarGame(): Promise<Game[]> {
    return this.gameRepository.find();
  }
/*cadastrar user*/
async cadastrarGame(data: GameCadastrarDto): Promise<GameResultDto>{
  let game = new Game()
  game.nameGame =data.nameGame
  game.versaoGame=data.versaoGame
  

  return this.gameRepository.save(game)
  .then((result) => {
    return <GameResultDto>{
      status: true,
      mensagem: "Game cadastrado com sucesso"
    }
  })
  .catch((error) => {
    return <GameResultDto>{
      status: false,
      mensagem: "Houve um errro ao cadastrar o game"
    }
  })    
}
}