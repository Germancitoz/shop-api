import express from 'express';
import { changePassword, login, register } from '../controllers/auth';

export const authRouter: express.Router = express.Router();

authRouter.post('/login', login);
authRouter.post('/register', register);
authRouter.post('/changepassword', changePassword);
