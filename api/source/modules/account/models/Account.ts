import { DataTypes, Sequelize } from 'sequelize';
import { getDatabase } from '../../../services/database';
import { AccountType } from '../types/Account';
import { hashPassword } from '../utils/auth';

const database: Sequelize = getDatabase();

const Account = database.define<AccountType>(
  'account',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'https://i.imgur.com/N0gsmWi.png',
    },
    group: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'user',
    },
  },
  {
    timestamps: true,
  }
);

Account.beforeCreate(async (account: AccountType) => {
  const { password } = account;
  account.password = await hashPassword(password);
});

export default Account;
