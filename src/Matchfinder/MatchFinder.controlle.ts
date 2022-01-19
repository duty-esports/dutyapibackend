import { Body, Controller, Get, Post } from '@nestjs/common';
import { get } from 'http';
import { MatchFinderService } from './MatchFinder.service';
import { Matchfinder } from './matchfinder.entity';
import { MatchFinderResultDto } from './dto/Result.dto';
import { MatchFinderCadastrarDto } from './dto/Matchfinder.creat.dto';

@Controller('MatchFinder')
export class MatchFinderController {
  constructor(private readonly matchfinderService: MatchFinderService){}

  @Get('listarMatchFinder')
  async listarMatchFinder(): Promise<Matchfinder[]>{
      return this.matchfinderService.listarMatchFinder();
  }

  @Post('cadastrarMatchFinder')
  async cadastrarMatchFinder(@Body() data: MatchFinderCadastrarDto): Promise<MatchFinderResultDto>{    
     return this.matchfinderService.cadastrarMatchFinder(data)    
  }

}