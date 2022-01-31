import express from 'express';
import { setHandler } from './handler';
import { setRoutes } from './router';

import CONFIG_SERVER from '../config/server';

export const startServer = (): express.Application => {
  const app: express.Application = express();
  setHandler(app);
  setRoutes(app);
  app.listen(CONFIG_SERVER.PORT, () => {
    console.log(
      `server listening: [${CONFIG_SERVER.URL}:${CONFIG_SERVER.PORT}]`
    );
  });
  return app;
};
