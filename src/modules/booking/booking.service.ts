import {IBooking} from './booking.interface';
import {Booking} from './booking.model';

const createBookingIntoDB = async (payload: Partial<IBooking>) => {
  const result = (
    await (
      await (await Booking.create(payload)).populate('slots')
    ).populate('room')
  ).populate('user');
  return result;
};

const getAllBookingFromDB = async () => {
  const result = await Booking.find({})
    .populate('slots')
    .populate('room')
    .populate('user');
  return result;
};

const getMyBookingFromDB = async (userID: string) => {
  const result = await Booking.find({user: userID})
    .populate('slots')
    .populate('room')
    .populate('user');
  return result;
};

const updateBookingFromDB = async (id: string, payload: Partial<IBooking>) => {
  const result = await Booking.findByIdAndUpdate(id, payload, {new: true});
  return result;
};

const deleteBookingFromDB = async (id: string) => {
  await Booking.findByIdAndUpdate(id, {isDeleted: true}, {new: true});
  return [];
};

export const BookingService = {
  createBookingIntoDB,
  getAllBookingFromDB,
  getMyBookingFromDB,
  updateBookingFromDB,
  deleteBookingFromDB,
};
