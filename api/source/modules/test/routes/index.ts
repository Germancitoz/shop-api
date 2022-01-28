import express from 'express';

export const testRouter: express.Router = express.Router();

testRouter.get('/', (req, res) => {
  res.status(200).json({
    message: 'Hello World!',
  });
});
