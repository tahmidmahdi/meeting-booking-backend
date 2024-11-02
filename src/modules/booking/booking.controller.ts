import {Request, Response} from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import {BookingService} from './booking.service';

const createBooking = catchAsync(async (req: Request, res: Response) => {
  const {date, slots, room} = req.body;
  const user = req.user;
  const payload = {
    date,
    slots,
    room,
    user: user._id,
  };
  const response = await BookingService.createBookingIntoDB(payload);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Booking created successfully',
    data: response,
  });
});

const getAllBooking = catchAsync(async (req: Request, res: Response) => {
  const response = await BookingService.getAllBookingFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Booking fetched successfully',
    data: response,
  });
});

const getMyBooking = catchAsync(async (req: Request, res: Response) => {
  const user = req.user;
  console.log(user);

  const response = await BookingService.getMyBookingFromDB(user._id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Booking fetched successfully',
    data: response,
  });
});

const updateBooking = catchAsync(async (req: Request, res: Response) => {
  const {id} = req.params;
  const payload = req.body;
  const response = await BookingService.updateBookingFromDB(id, payload);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Booking updated successfully',
    data: response,
  });
});

const deleteBooking = catchAsync(async (req: Request, res: Response) => {
  const {id} = req.params;
  const response = await BookingService.deleteBookingFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Booking deleted successfully',
    data: response,
  });
});

export const BookingControllers = {
  createBooking,
  getAllBooking,
  getMyBooking,
  updateBooking,
  deleteBooking,
};
