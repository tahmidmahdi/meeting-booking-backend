import {model, Schema} from 'mongoose';
import {IBooking} from './booking.interface';

const bookingSchema = new Schema<IBooking>({
  date: {
    type: String,
    required: true,
  },
  slots: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Slot',
      required: true,
    },
  ],
  room: {
    type: Schema.Types.ObjectId,
    ref: 'Room',
    required: true,
  },
  isConfirmed: {
    type: Boolean,
    default: false,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

export const Booking = model<IBooking>('Booking', bookingSchema);
