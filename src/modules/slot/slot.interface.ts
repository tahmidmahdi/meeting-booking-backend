import {Schema} from 'mongoose';

export interface ISlot {
  room: Schema.Types.ObjectId;
  date: Date;
  startTime: string;
  endTime: string;
  isBooked: boolean;
}
