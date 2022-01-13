import { Body, Controller, Get, Post } from '@nestjs/common';
import { get } from 'http';
import { UserService } from './User.service';
import { User } from './User.entity';
import { UserResultDto } from './dto/Result.dto';
import { UserCadastrarDto } from './dto/user.create.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService){}

  @Get('listar')
  async listar(): Promise<User[]>{
      return this.userService.listar();
  }

  @Post('cadastrar')
  async cadastrar(@Body() data: UserCadastrarDto): Promise<UserResultDto>{    
     return this.userService.cadastrar(data)    
  }

}