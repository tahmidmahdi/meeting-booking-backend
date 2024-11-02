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
    floorNo: {
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
        required: true,
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

roomSchema.pre('find', function (next) {
  this.where({isDeleted: {$ne: true}});
  next();
});

export const Room = model<IRoom>('Room', roomSchema);
