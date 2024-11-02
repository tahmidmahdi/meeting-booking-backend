import {Schema} from 'mongoose';

export interface IBooking {
  date: string;
  slots: Array<Schema.Types.ObjectId>;
  room: Schema.Types.ObjectId;
  user: Schema.Types.ObjectId;
  isConfirmed: boolean;
  isDeleted: boolean;
}
