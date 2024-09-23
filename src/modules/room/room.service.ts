import {IRoom} from './room.interface';
import {Room} from './room.model';

const createRoomIntoDB = async (payload: IRoom) => {
  const response = await Room.create(payload);
  return response;
};

const getAllRoomsFromDB = async () => {
  const response = await Room.find();
  return response;
};

const getRoomFromDB = async (id: string) => {
  const response = await Room.findById(id);
  return response;
};

export const RoomServices = {
  createRoomIntoDB,
  getAllRoomsFromDB,
  getRoomFromDB,
};
