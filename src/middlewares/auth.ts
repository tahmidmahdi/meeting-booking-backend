import {NextFunction, Request, Response} from 'express';
import httpStatus from 'http-status';
import jwt, {JwtPayload} from 'jsonwebtoken';
import config from '../config';
import AppError from '../errors/AppError';
import {TUserRole} from '../modules/users/users.interface';
import {User} from '../modules/users/users.model';
import catchAsync from '../utils/catchAsync';
const auth = (...requiredRoles: TUserRole[]) => {
  console.log(requiredRoles);

  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;

    if (!token) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized');
    }
    // check the token is valid

    const decoded = jwt.verify(token, config.jwt_access_secret as string);
    if (
      requiredRoles &&
      !requiredRoles.includes((decoded as JwtPayload)?.role)
    ) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized');
    }
    const {email, role, iat} = decoded as JwtPayload;
    const user = await User.isUserExistByEmail(email);
    if (user.isDeleted) {
      throw new AppError(httpStatus.FORBIDDEN, 'This user is deleted');
    }
    req.user = decoded as JwtPayload;
    next();
  });
};

export default auth;
