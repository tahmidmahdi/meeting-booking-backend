import express, {Router} from 'express';
import {AuthRoutes} from '../modules/auth/auth.route';
import {RoomRoutes} from '../modules/room/room.route';
import {SlotRoutes} from '../modules/slot/slot.route';
import {UserRoutes} from '../modules/users/users.route';

const router = express.Router();

interface IModuleRoute {
  path: string;
  route: Router;
}

const moduleRoutes: Array<IModuleRoute> = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/rooms',
    route: RoomRoutes,
  },
  {
    path: '/slots',
    route: SlotRoutes,
  },
];

moduleRoutes.forEach((routes) => router.use(routes.path, routes.route));

export default router;
