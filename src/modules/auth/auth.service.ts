import httpStatus from 'http-status';
import jwt from 'jsonwebtoken';
import config from '../../config';
import AppError from '../../errors/AppError';
import {User} from '../users/users.model';
import {ILoginUser} from './auth.interface';
const loginUser = async (payload: ILoginUser) => {
  //   check if the user does exist
  const user = await User.isUserExistByEmail(payload.email);
  console.log(user);

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user is invalid');
  }
  //   check if the user is already deleted
  if (user.isDeleted) {
    throw new AppError(httpStatus.FORBIDDEN, 'This user is invalid');
  }
  //   check if password matched?
  const isPasswordMatched = await User.isPasswordMatched(
    payload.password,
    user.password as string
  );
  if (!isPasswordMatched) {
    throw new AppError(httpStatus.FORBIDDEN, 'Password does not matched');
  }
  //   Access granted: Send accessToken & refreshToken
  const jwtPayload = {
    email: user.email,
    role: user.role,
  };
  const accessToken = jwt.sign(jwtPayload, config.jwt_access_secret as string, {
    expiresIn: '10d',
  });
  return {
    accessToken,
  };
};

export const AuthServices = {
  loginUser,
};
