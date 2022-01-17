import { Body, Controller, Get, Post } from '@nestjs/common';
import { get } from 'http';
import { TournamentService } from './tournament.service';
import { Tournament } from './tournament.entity';
import { TournamentResultDto } from './dto/Result.dto';
import { TournamentCadastrarDto } from './dto/tournament.create.dto';

@Controller('user')
export class TournamentController {
  constructor(private readonly tournamentService: TournamentService){}

  @Get('listarTorneios')
  async listar(): Promise<Tournament[]>{
      return this.tournamentService.listar();
  }

  @Post('cadastrarTorneios')
  async cadastrar(@Body() data: TournamentCadastrarDto): Promise<TournamentResultDto>{    
     return this.tournamentService.cadastrar(data)    
  }

}