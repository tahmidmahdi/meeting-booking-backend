import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import {RoomControllers} from './room.controller';
import {RoomValidations} from './room.validation';

const router = express.Router();

router
  .post(
    '/create-room',
    validateRequest(RoomValidations.createRoomValidation),
    RoomControllers.createRoom
  )
  .get('/', RoomControllers.getAllRooms)
  .get('/:id', RoomControllers.getRoomByID);

export const RoomRoutes = router;
