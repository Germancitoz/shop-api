import express from 'express';

const routerManager: express.Router = express.Router();

//import { testRouter } from '../modules/test/routes/index';
const initRoutes = () => {
  //routerManager.use('/', testRouter);
};

export const setRoutes = (app: express.Application): void => {
  initRoutes();
  app.use(routerManager);
};
