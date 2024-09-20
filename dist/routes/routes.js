"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_route_1 = require("../modules/users/users.route");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/users',
        route: users_route_1.UserRoutes,
    },
];
moduleRoutes.forEach((routes) => router.use(routes.path, routes.route));
exports.default = router;
