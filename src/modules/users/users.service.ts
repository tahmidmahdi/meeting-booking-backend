import {IUser} from './users.interface';
import {User} from './users.model';

const createUserIntoDB = async (payload: IUser) => {
  const response = await User.create(payload);
  return response;
};

export const UsersService = {
  createUserIntoDB,
};
