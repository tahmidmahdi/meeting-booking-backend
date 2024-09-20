import express, {Router} from 'express';
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
];

moduleRoutes.forEach((routes) => router.use(routes.path, routes.route));

export default router;
