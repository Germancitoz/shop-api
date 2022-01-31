import { Sequelize } from 'sequelize';
import CONFIG_DATABASE from '../config/database';

const { DB, USER, PASSWORD, DIALECT } = CONFIG_DATABASE;

const sequelize: Sequelize = new Sequelize(DB, USER, PASSWORD, {
  dialect: DIALECT,
  logging: true,
});

export const startDatabase = (): Promise<void> => {
  return new Promise(async (resolve, reject) => {
    try {
      const connection = await sequelize.authenticate();
      console.log(`database authenticated: [${DIALECT}:${DB}]`);
      await sequelize.sync();
      console.log(`database synced`);
      resolve(connection);
    } catch (error) {
      reject(error);
    }
  });
};

export const closeDatabase = (): void => {
  sequelize.close();
  return;
};

export const getDatabase = (): Sequelize => sequelize;
