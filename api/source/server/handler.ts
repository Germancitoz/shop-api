import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

export const setHandler = (app: express.Application): void => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
  app.use(helmet());
  app.use(cookieParser());
  process.env.NODE_ENV?.trim() === 'DEVELOPMENT'
    ? app.use(morgan('dev'))
    : null;
};
