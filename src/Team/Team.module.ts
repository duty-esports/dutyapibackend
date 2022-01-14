import { Module } from '@nestjs/common';
import { forwardRef } from '@nestjs/common';
import { DatabaseModule } from 'src/dataBase/database.module';
/*import { DatabaseModule } from '../dataBase/database.module'*/
import { TeamController } from './Team.controlle';
import { TeamProviders } from './Team.providers';
import { TeamService } from './Team.service';

@Module({
  imports: [DatabaseModule],
  controllers:[TeamController],
  providers: [
    ...TeamProviders,
    TeamService,
  ],
})
export class teamModule {}
