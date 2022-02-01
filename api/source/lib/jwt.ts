import jwt from 'jsonwebtoken';
import { AccountType } from '../modules/account/types/Account';

export const verifyToken = (token: string): Promise<jwt.JwtPayload> => {
  return new Promise(async (resolve, reject) => {
    try {
      const decodedToken = await jwt.verify(token, 'SECRET');
      resolve(decodedToken as jwt.JwtPayload);
    } catch (error) {
      reject(null);
    }
  });
};

export const signToken = (account: AccountType): Promise<string> => {
  return new Promise(async (resolve, reject) => {
    try {
      const token = await jwt.sign(
        {
          id: account.id,
        },
        'SECRET',
        { expiresIn: '1h' }
      );
      resolve(token);
    } catch (error) {
      reject(error);
    }
  });
};
