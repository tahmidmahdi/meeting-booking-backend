import {startSession} from 'mongoose';
import {ISlot} from './slot.interface';
import {Slot} from './slot.model';
import convertTimeToMinutes, {generateSlotTimeInterval} from './slot.utils';

const createSlotIntoDB = async (payload: ISlot) => {
  const session = await startSession();
  try {
    session.startTransaction();
    const {startTime, endTime, room, date} = payload;
    const startTimeInMinutes = convertTimeToMinutes(startTime);
    const endTimeInMinutes = convertTimeToMinutes(endTime);
    const totalDuration = endTimeInMinutes - startTimeInMinutes;
    const totalSlots = Math.floor(totalDuration / 60);
    const slots = generateSlotTimeInterval(
      startTimeInMinutes,
      totalSlots,
      room,
      date
    );
    const response = await Slot.insertMany(slots, {session});
    await session.commitTransaction();
    await session.endSession();

    return response;
  } catch (error) {
    console.log(error);

    await session.abortTransaction();
    await session.endSession();
    throw new Error('Failed to create slot');
  }
};

const getAllSlotsFromDB = async () => {
  const response = await Slot.find().populate('room');
  return response;
};

export const SlotServices = {
  createSlotIntoDB,
  getAllSlotsFromDB,
};
