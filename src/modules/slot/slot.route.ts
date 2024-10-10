import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import {SlotControllers} from './slot.controller';
import {SlotValidations} from './slot.validation';

const router = express.Router();

router.post(
  '/create-slot',
  validateRequest(SlotValidations.createSlotValidation),
  SlotControllers.createSlot
);

export const SlotRoutes = router;
