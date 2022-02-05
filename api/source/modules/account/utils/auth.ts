import bcrypt from 'bcrypt';
import { AccountType } from '../types/Account';

export const hashPassword = (password: string): Promise<string> => {
  return new Promise(async (resolve, reject) => {
    try {
      resolve(await bcrypt.hash(password, 10));
    } catch (error) {
      reject(error);
    }
  });
};

export const isValidPassword = (
  password: string,
  account: AccountType | null
): Promise<boolean> => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!account) {
        resolve(false);
      }
      const isValid = await bcrypt.compare(password, account!.password);
      resolve(isValid);
    } catch (error) {
      reject(error);
    }
  });
};
