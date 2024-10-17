// ormconfig.ts
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: 'postgres',
  host:  process.env.DB_HOST,
  port:  5432,
  username:  'postgres',
  password: 'root',
  database: 'postgres',
  entities: ['src/modules/**/infra/typeorm/entities/*.ts'],
  migrations: ['src/config/database/migration/*.ts'],
  synchronize: false,
  logging: true
});

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization:', err);
  });

  