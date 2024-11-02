import express from 'express';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import {USER_ROLE} from '../users/users.constant';
import {SlotControllers} from './slot.controller';
import {SlotValidations} from './slot.validation';

const router = express.Router();

router
  .post(
    '/create-slot',
    auth(USER_ROLE.admin),
    validateRequest(SlotValidations.createSlotValidation),
    SlotControllers.createSlot
  )
  .get('/', auth(USER_ROLE.admin), SlotControllers.getAllSlots)
  .get(
    '/availability',
    auth(USER_ROLE.admin, USER_ROLE.user),
    // validateRequest(SlotValidations.checkSlotAvailabilityValidation),
    SlotControllers.shotsByAvailability
  );

export const SlotRoutes = router;
