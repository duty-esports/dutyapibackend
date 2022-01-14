
import { Connection } from 'typeorm';
import { Team } from './Team.entity';

export const TeamProviders = [
  {
    provide: 'TEAM_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Team),
    inject: ['DATABASE_CONNECTION'],
  },
];