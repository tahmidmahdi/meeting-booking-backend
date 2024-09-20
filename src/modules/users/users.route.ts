import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import {UserControllers} from './users.controller';
import {usersValidation} from './users.validation';

const router = express.Router();

router.post(
  '/create-user',
  validateRequest(usersValidation.createUserValidationSchema),
  UserControllers.createUsers
);

export const UserRoutes = router;
