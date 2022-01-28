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
  USER: process.env.DB_USER ?? 'root',
  PASSWORD: process.env.DB_PASSWORD ?? '',
  DIALECT: (process.env.DB_DIALECT as Dialect) ?? ('mysql' as Dialect),
  DB: process.env.DB_NAME ?? 'test',
};
export default CONFIG_DATABASE;
