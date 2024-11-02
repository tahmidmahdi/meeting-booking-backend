import express from 'express';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import {USER_ROLE} from '../users/users.constant';
import {RoomControllers} from './room.controller';
import {RoomValidations} from './room.validation';

const router = express.Router();

router
  .post(
    '/create-room',
    auth(USER_ROLE.admin),
    validateRequest(RoomValidations.createRoomValidation),
    RoomControllers.createRoom
  )
  .get('/', auth(USER_ROLE.admin, USER_ROLE.user), RoomControllers.getAllRooms)
  .get(
    '/:id',
    auth(USER_ROLE.admin, USER_ROLE.user),
    RoomControllers.getRoomByID
  )
  .put(
    '/:id',
    auth(USER_ROLE.admin),
    validateRequest(RoomValidations.updateRoomValidation),
    RoomControllers.updateRoom
  );

export const RoomRoutes = router;
