import {Schema} from 'mongoose';

export interface ISlot {
  room: Schema.Types.ObjectId;
  date: string;
  startTime: string;
  endTime: string;
  isBooked: boolean;
}
