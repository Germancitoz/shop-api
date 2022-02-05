import express from 'express';
import { login, register } from '../controllers/auth';

export const authRouter: express.Router = express.Router();

authRouter.post('/login', login);
authRouter.post('/register', register);
