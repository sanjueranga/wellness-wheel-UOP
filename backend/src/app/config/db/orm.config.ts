import { DataSourceOptions } from 'typeorm';

const baseconfig: any = {
  host: process.env['DB_HOST'],
  port: Number(process.env['DB_PORT']) || 5432,
  username: process.env['DB_USER'],
  password: process.env['DB_PASSWORD'],
  database: process.env['DB_NAME'],
  // entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
};

const pgconfig: DataSourceOptions = {
  ...baseconfig,
  type: 'postgres',
};

const msqlconfig: DataSourceOptions = {
  ...baseconfig,
  type: 'mysql',
};

export default function dbConfig() {
  if (process.env['DB'] === 'mysql') {
    return msqlconfig;
  } else {
    return pgconfig;
  }
}
