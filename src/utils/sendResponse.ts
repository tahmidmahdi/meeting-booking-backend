import {Response} from 'express';
import responseFilter from './responseFilter';

interface IResponse<T> {
  statusCode: number;
  success: boolean;
  message?: string;
  data: T;
}

const sendResponse = <T>(res: Response, payload: IResponse<T>) => {
  const {statusCode, success, message, data} = payload;
  res.status(statusCode).json({
    statusCode,
    success,
    message,
    data: responseFilter(data as unknown as Record<string, string | undefined>),
  });
};

export default sendResponse;
