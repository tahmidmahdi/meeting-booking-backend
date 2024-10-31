import {Request, Response} from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import {UsersService} from './users.service';

const createUsers = catchAsync(async (req: Request, res: Response) => {
  const response = await UsersService.createUserIntoDB(req.body);
  delete response.password;

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User created Successfully',
    data: response,
  });
});

export const UserControllers = {
  createUsers,
};
