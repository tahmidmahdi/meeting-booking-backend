import {Model} from 'mongoose';
import {USER_ROLE} from './users.constant';

export interface IUser {
  name: string;
  email: string;
  password?: string;
  phone: string;
  address: string;
  role: 'user' | 'admin';
  isDeleted: boolean;
}

export type TUserRole = keyof typeof USER_ROLE;

export interface UserModel extends Model<IUser> {
  isUserExistByEmail(email: string): Promise<IUser>;
  isPasswordMatched(password: string, hash: string): Promise<boolean>;
}
