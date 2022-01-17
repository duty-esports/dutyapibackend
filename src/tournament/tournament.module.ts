
import { Module } from '@nestjs/common';
import { forwardRef } from '@nestjs/common';
import { DatabaseModule } from 'src/dataBase/database.module';
/*import { DatabaseModule } from '../dataBase/database.module'*/
import { TournamentController } from './tournament.controller';
import { TournamentProviders } from './Tournament.providers';
import { TournamentService } from './tournament.service';

@Module({
  imports: [DatabaseModule],
  controllers:[TournamentController],
  providers: [
    ...TournamentProviders,
    TournamentService,
  ],
})
export class TournamentModule {}
