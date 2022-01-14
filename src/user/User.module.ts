
import { Module } from '@nestjs/common';
import { forwardRef } from '@nestjs/common';
import { DatabaseModule } from 'src/dataBase/database.module';
/*import { DatabaseModule } from '../dataBase/database.module'*/
import { UserController } from './User.controller';
import { UserProviders } from './User.providers';
import { UserService } from './User.service';

@Module({
  imports: [DatabaseModule],
  controllers:[UserController],
  providers: [
    ...UserProviders,
    UserService,
  ],
})
export class UserModule {}
