import {Request, Response} from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import {RoomServices} from './room.service';

const createRoom = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;
  const response = await RoomServices.createRoomIntoDB(payload);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Room Created Successfully',
    data: response,
  });
});

const getAllRooms = catchAsync(async (req: Request, res: Response) => {
  const response = await RoomServices.getAllRoomsFromDB();
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Room Created Successfully',
    data: response,
  });
});

const getRoomByID = catchAsync(async (req: Request, res: Response) => {
  const {id} = req.params;
  const response = await RoomServices.getRoomFromDB(id);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Room retrieved Successfully',
    data: response,
  });
});

const updateRoom = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;
  const {id} = req.params;
  const response = await RoomServices.updateRoomIntoDB(id, data);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Room updated successfully',
    data: response,
  });
});

export const RoomControllers = {
  createRoom,
  getAllRooms,
  getRoomByID,
  updateRoom,
};
