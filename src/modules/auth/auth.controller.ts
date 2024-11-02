import {Request, Response} from 'express';
import httpStatus from 'http-status';
import config from '../../config';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import {AuthServices} from './auth.service';

const loginUser = catchAsync(async (req: Request, res: Response) => {
  const response = await AuthServices.loginUser(req.body);
  const {refreshToken, ...others} = response;
  res.cookie('refreshToken', refreshToken, {
    secure: config.NODE_ENV === 'production',
    httpOnly: true,
  });
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User is logged in successfully',
    data: others,
  });
});

const refreshToken = catchAsync(async (req: Request, res: Response) => {
  const {refreshToken} = req.cookies;
  const response = await AuthServices.refreshToken(refreshToken);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Access Token is generated successfully',
    data: response,
  });
});

export const AuthControllers = {
  loginUser,
  refreshToken,
};
