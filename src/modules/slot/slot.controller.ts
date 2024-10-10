import {Request, Response} from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import {SlotServices} from './slot.service';

const createSlot = catchAsync(async (req: Request, res: Response) => {
  const response = await SlotServices.createSlotIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Slot is created successfully',
    data: response,
  });
});

export const SlotControllers = {
  createSlot,
};
