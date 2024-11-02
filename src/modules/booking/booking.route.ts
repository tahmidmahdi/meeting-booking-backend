import express from 'express';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import {USER_ROLE} from '../users/users.constant';
import {BookingControllers} from './booking.controller';
import {BookingValidation} from './booking.validation';

const router = express.Router();

router
  .post(
    '/create-booking',
    auth(USER_ROLE.user, USER_ROLE.admin),
    validateRequest(BookingValidation.createBookingZodSchema),
    BookingControllers.createBooking
  )
  .get('/', auth(USER_ROLE.admin), BookingControllers.getAllBooking)
  .get(
    '/my-booking',
    auth(USER_ROLE.user, USER_ROLE.admin),
    BookingControllers.getMyBooking
  )
  .put('/:id', auth(USER_ROLE.admin), BookingControllers.updateBooking)
  .delete('/:id', auth(USER_ROLE.admin), BookingControllers.deleteBooking);

export const BookingRoutes = router;
