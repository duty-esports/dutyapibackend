import { Body, Controller, Get, Post } from '@nestjs/common';
import { get } from 'http';
import { MatchFinderService } from './MatchFinder.service';
import { Matchfinder } from './matchfinder.entity';
import { MatchFinderResultDto } from './dto/Result.dto';
import { MatchFinderCadastrarDto } from './dto/Matchfinder.creat.dto';

@Controller('Team')
export class MatchFinderController {
  constructor(private readonly matchfinderService: MatchFinderService){}

  @Get('listarTeam')
  async listar(): Promise<Matchfinder[]>{
      return this.matchfinderService.listarTeam();
  }

  @Post('cadastrarTeam')
  async cadastrar(@Body() data: MatchFinderCadastrarDto): Promise<MatchFinderResultDto>{    
     return this.matchfinderService.cadastrarTeam(data)    
  }

}