import { Model } from 'sequelize';

export interface AccountType extends Model {
  id: string;
  name: string;
  email: string;
  password: string;
  country: string;
  image: string;
  group: string;
}
