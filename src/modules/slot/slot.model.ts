import {model, Schema} from 'mongoose';
import {ISlot} from './slot.interface';

const slotSchema = new Schema<ISlot>(
  {
    room: {
      type: String,
      ref: 'Room',
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    startTime: {
      type: String,
      required: true,
    },
    endTime: {
      type: String,
      required: true,
    },
    isBooked: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const Slot = model('Slot', slotSchema);
