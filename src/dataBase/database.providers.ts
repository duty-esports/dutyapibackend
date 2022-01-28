import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection({
      type: 'mysql',
      host: 'us-cdbr-east-05.cleardb.net',
      port: 3306,
      username: 'b4e865e9c872c8',
      password: 'ec20e7d5',
      database: 'dutybd',
     /* type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'sev1025',
      database: 'dutybd',*/
      entities: [
          __dirname +'/../**/*.entity{.ts,.js}',
      ],
      synchronize: true,
    }),
  },
];

