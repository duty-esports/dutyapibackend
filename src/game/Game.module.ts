import { Module } from '@nestjs/common';
import { forwardRef } from '@nestjs/common';
import { DatabaseModule } from 'src/dataBase/database.module';
/*import { DatabaseModule } from '../dataBase/database.module'*/
import { GameController } from './Game.controller';
import { GameProviders } from './Game.providers';
import { GameService } from './Game.service';

@Module({
  imports: [DatabaseModule],
  controllers:[GameController],
  providers: [
    ...GameProviders,
    GameService,
  ],
})
export class gameModule {}
