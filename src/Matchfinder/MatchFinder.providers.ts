
import { Connection } from 'typeorm';
import { Matchfinder } from './matchfinder.entity';

export const MatchFinderProviders = [
  {
    provide: 'TEAM_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Matchfinder),
    inject: ['DATABASE_CONNECTION'],
  },
];