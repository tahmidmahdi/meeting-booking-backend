import {model, Schema} from 'mongoose';
import {IRoom} from './room.interface';

const roomSchema = new Schema<IRoom>(
  {
    name: {
      type: String,
      required: true,
    },
    roomNo: {
      type: Number,
      trim: true,
      required: true,
    },
    pricePerSlot: {
      type: Number,
      trim: true,
      required: true,
    },
    capacity: {
      type: Number,
      trim: true,
      required: true,
    },
    amenities: [
      {
        type: String,
      },
    ],
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const Room = model('Room', roomSchema);
