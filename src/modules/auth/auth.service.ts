import httpStatus from 'http-status';
import jwt, {JwtPayload} from 'jsonwebtoken';
import config from '../../config';
import AppError from '../../errors/AppError';
import responseFilter from '../../utils/responseFilter';
import {User} from '../users/users.model';
import {ILoginUser} from './auth.interface';
import createToken from './auth.utils';
const loginUser = async (payload: ILoginUser) => {
  //   check if the user does exist
  const user = await User.isUserExistByEmail(payload.email);

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
  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string
  );

  const refreshToken = createToken(
    jwtPayload,
    config.jwt_refresh_secret as string,
    config.jwt_refresh_expires_in as string
  );
  const filteredUser = responseFilter(
    user as unknown as Record<string, string | undefined>
  );

  return {
    accessToken: `Bearer ${accessToken}`,
    refreshToken: `Bearer ${refreshToken}`,
    data: filteredUser,
  };
};

const refreshToken = async (token: string) => {
  if (!token) {
    throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized');
  }

  const decoded = jwt.verify(token, config.jwt_refresh_secret as string);

  const {email, role} = decoded as JwtPayload;

  const user = await User.isUserExistByEmail(email);
  if (!user) {
    throw new AppError(httpStatus.FORBIDDEN, 'Invalid User');
  }
  if (user.isDeleted) {
    throw new AppError(httpStatus.FORBIDDEN, 'This user is deleted');
  }
  const jwtPayload = {
    email,
    role,
  };
  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_refresh_expires_in as string
  );
  return {
    accessToken,
  };
};

export const AuthServices = {
  loginUser,
  refreshToken,
};
