import { Body, Controller, Get, Post } from '@nestjs/common';
import { get } from 'http';
import { GameService } from './Game.service';
import { Game } from './Game.entity';
import { GameResultDto } from './dto/Result.dto';
import { GameCadastrarDto } from './dto/Game.create.dto';

@Controller('Game')
export class GameController {
  constructor(private readonly gameService: GameService){}

  @Get('listarGame')
  async listar(): Promise<Game[]>{
      return this.gameService.listarGame();
  }

  @Post('cadastrarGame')
  async cadastrar(@Body() data: GameCadastrarDto): Promise<GameResultDto>{    
     return this.gameService.cadastrarGame(data)    
  }

}