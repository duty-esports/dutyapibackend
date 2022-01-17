import { Module } from '@nestjs/common';
import { forwardRef } from '@nestjs/common';
import { DatabaseModule } from 'src/dataBase/database.module';
/*import { DatabaseModule } from '../dataBase/database.module'*/
import { MatchFinderController } from './MatchFinder.controlle';
import { MatchFinderProviders } from './MatchFinder.providers';
import { MatchFinderService } from './MatchFinder.service';

@Module({
  imports: [DatabaseModule],
  controllers:[MatchFinderController],
  providers: [
    ...MatchFinderProviders,
    MatchFinderService,
  ],
})
export class teamModule {}
