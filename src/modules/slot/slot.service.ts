import {ISlot} from './slot.interface';
import {Slot} from './slot.model';

const createSlotIntoDB = async (payload: ISlot) => {
  const response = (await Slot.create(payload)).populate('room');
  return response;
};

export const SlotServices = {
  createSlotIntoDB,
};
