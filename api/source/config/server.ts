import dotenv from 'dotenv';
dotenv.config();

type Server = {
  URL: string;
  PORT: number;
};

const CONFIG_SERVER: Server = {
  URL: process.env.SERVER_URL ?? 'http://localhost',
  PORT: Number(process.env.SERVER_PORT) ?? 8000,
};

export default CONFIG_SERVER;
