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
      success: false,
      message: 'Please provide an email and password.',
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
      success: false,
      message: 'Not exist an account with this email',
    });
    return;
  }

  if (!(await isValidPassword(password, account))) {
    response.status(401).json({
      success: false,
      message: 'Password is incorrect',
    });
    return;
  }

  const token = await signToken(account);
  response.status(200).json({
    success: true,
    message: 'Login success',
    data: token,
  });
};

export const register = async (
  request: express.Request,
  response: express.Response
) => {
  const { name, email, password, country } = request.body;

  if (!name || !email || !password || !country) {
    response.status(400).json({
      success: false,
      message: 'Please provide a name, email, password and country.',
    });
    return;
  }

  const account: AccountType | null = await Account.findOne({
    where: {
      email,
    },
  });

  if (account) {
    response.status(401).json({
      success: false,
      message: 'This email is already registered',
    });
    return;
  }

  await Account.create({
    name,
    email,
    password,
    country,
  });

  response.status(200).json({
    success: true,
    message: 'Register success',
  });
};

export const changePassword = async (
  request: express.Request,
  response: express.Response
) => {
  const { email, password, newPassword } = request.body;

  if (!email || !password || !newPassword) {
    response.status(400).json({
      success: false,
      message: 'Please provide an email, password and new password.',
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
      success: false,
      message: 'Not exist an account with this email',
    });
    return;
  }

  if (!(await isValidPassword(password, account))) {
    response.status(401).json({
      success: false,
      message: 'Password is incorrect',
    });
    return;
  }

  await account.update({
    password: newPassword,
  });

  response.status(200).json({
    success: true,
    message: 'Change password success ',
  });
};
