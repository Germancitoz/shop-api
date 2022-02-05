import express from 'express';
import CONFIG_SERVER from '../config/server';
import { setHandler } from './handler';
import { setRoutes } from './router';

export const startServer = (): Promise<express.Application> => {
  return new Promise((resolve, reject) => {
    const app: express.Application = express();
    setHandler(app);
    setRoutes(app);
    app.listen(CONFIG_SERVER.PORT, () => {
      `server listening: [${CONFIG_SERVER.URL}:${CONFIG_SERVER.PORT}]`;
      resolve(app);
    });
  });
};
