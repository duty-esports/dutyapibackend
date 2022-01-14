import { Body, Controller, Get, Post } from '@nestjs/common';
import { get } from 'http';
import { TeamService } from './Team.service';
import { Team } from './Team.entity';
import { TeamResultDto } from './dto/Result.dto';
import { TeamCadastrarDto } from './dto/Team.creat.dto';

@Controller('Team')
export class TeamController {
  constructor(private readonly teamService: TeamService){}

  @Get('listarTeam')
  async listar(): Promise<Team[]>{
      return this.teamService.listarTeam();
  }

  @Post('cadastrarTeam')
  async cadastrar(@Body() data: TeamCadastrarDto): Promise<TeamResultDto>{    
     return this.teamService.cadastrarTeam(data)    
  }

}