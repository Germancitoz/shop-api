import express from 'express';
import { signToken } from '../../../lib/jwt';
import Account from '../models/Account';
import { AccountType } from '../types/Account';
import { isValidPassword } from '../utils/auth';

export const login = async (
  request: express.Request,
  response: express.Response
) => {
  const { email, password } = request.body;

  if (!email || !password) {
    response.status(400).json({
      message: 'Bad request',
    });
    return;
  }

  const account: AccountType | null = await Account.findOne({
    where: {
      email,
    },
  });

  if (!account) {
    response.status(401).json({
      message: 'Not exist an account with this email',
    });
    return;
  }

  if (!(await isValidPassword(password, account))) {
    response.status(401).json({
      message: 'Invalid password',
    });
    return;
  }

  const token = await signToken(account);
  response.cookie('jwt_token', token, {
    httpOnly: true,
  });

  response.status(200).json({
    message: 'Login success',
  });
};

export const register = async (
  request: express.Request,
  response: express.Response
) => {
  const { name, email, password, country, image } = request.body;
  await Account.create({
    name,
    email,
    password,
    country,
    image,
  });
  response.send('register');
};
