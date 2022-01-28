import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';

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
