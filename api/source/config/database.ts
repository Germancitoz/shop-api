import dotenv from 'dotenv';
dotenv.config();

type Dialect = 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql';
type Database = {
  USER: string;
  PASSWORD: string;
  DIALECT: Dialect;
  DB: string;
};

const CONFIG_DATABASE: Database = {
  USER: process.env.DATABASE_USER ?? 'root',
  PASSWORD: process.env.DATABASE_PASSWORD ?? '',
  DIALECT: (process.env.DATABASE_DIALECT as Dialect) ?? ('mysql' as Dialect),
  DB: process.env.DATABASE_DB ?? 'test',
};
export default CONFIG_DATABASE;
