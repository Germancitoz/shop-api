import express from 'express';

import Account from '../../modules/account/models/Account';
import { verifyToken } from '../../lib/jwt';
import { AccountType } from '../../modules/account/types/Account';

export const isAuthenticated = async (
  request: express.Request,
  response: express.Response,
  next: express.NextFunction
) => {
  const token = request.cookies['jwt_token']?.split(' ')[1];

  if (!token) {
    response.clearCookie('jwt_token');
    response.status(401).json({
      message: 'Unauthorized',
    });
    return;
  }

  try {
    const data = await verifyToken(token);

    if (!data || !data.id) {
      response.clearCookie('jwt_token');
      response.status(401).json({
        message: 'Unauthorized',
      });
      return;
    }

    const account: AccountType | null = await Account.findOne({
      where: {
        id: data.id,
      },
    });
    if (!account) {
      response.clearCookie('jwt_token');
      response.status(401).json({
        message: 'Unauthorized',
      });
      return;
    }

    request.account = account;
  } catch (error) {
    response.clearCookie('jwt_token');
    response.status(401).json({
      message: 'Unauthorized',
    });
    return;
  }
};
