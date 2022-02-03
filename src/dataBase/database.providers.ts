import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection({
      /*type: 'mysql',
      host: 'kutnpvrhom7lki7u.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
      port: 3306,
      username: 'g03ncere83umpw8j',
      password: 'vpilawp71trpxaey',
      database: 'm0q8hgxl9fg65uqi',*/
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'sev1025',
      database: 'dutybd',
      entities: [
          __dirname +'/../**/*.entity{.ts,.js}',
      ],
      synchronize: true,
    }),
  },
];

