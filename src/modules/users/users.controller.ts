import {Request, Response} from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import {UsersService} from './users.service';

const createUsers = catchAsync(async (req: Request, res: Response) => {
  console.log(req.body);

  const response = await UsersService.createUserIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Successfully send',
    data: response,
  });
});

export const UserControllers = {
  createUsers,
};
