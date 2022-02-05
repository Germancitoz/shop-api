import express from 'express';

const routerManager: express.Router = express.Router();

import { authRouter } from '../modules/account/routes/auth';

const initRoutes = () => {
  routerManager.use('/auth', authRouter);
};

export const setRoutes = (app: express.Application): void => {
  initRoutes();
  app.use(routerManager);
};
