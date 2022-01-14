
import { Connection } from 'typeorm';
import { Game } from './Game.entity';

export const GameProviders = [
  {
    provide: 'GAME_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Game),
    inject: ['DATABASE_CONNECTION'],
  },
];