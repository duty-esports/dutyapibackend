
import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserResultDto } from './dto/Result.dto';
import { UserCadastrarDto } from './dto/user.create.dto';
import { User } from './User.entity';


@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}


  /*lista todos os usuarios*/
  async listar(): Promise<User[]> {
    return this.userRepository.find();
  }
/*cadastrar user*/
async cadastrar(data: UserCadastrarDto): Promise<UserResultDto>{
  let usuario = new User()
  usuario.email = data.email
  usuario.name = data.name
  usuario.password = data.password
  usuario.dataDeNascimento = data.dataDeNascimento
  usuario.nickName = data.nickName
  usuario.plataformaDeJogo= data.plataformaDeJogo

  return this.userRepository.save(usuario)
  .then((result) => {
    return <UserResultDto>{
      status: true,
      mensagem: "Usuário cadastrado com sucesso"
    }
  })
  .catch((error) => {
    return <UserResultDto>{
      status: false,
      mensagem: "Houve um errro ao cadastrar o usuário"
    }
  })    
}
}
