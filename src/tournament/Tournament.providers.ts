
import { Connection } from 'typeorm';
import { Tournament } from './tournament.entity';

export const TournamentProviders = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Tournament),
    inject: ['DATABASE_CONNECTION'],
  },
];