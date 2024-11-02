"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middlewares/auth"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const users_constant_1 = require("../users/users.constant");
const room_controller_1 = require("./room.controller");
const room_validation_1 = require("./room.validation");
const router = express_1.default.Router();
router
    .post('/create-room', (0, auth_1.default)(users_constant_1.USER_ROLE.admin), (0, validateRequest_1.default)(room_validation_1.RoomValidations.createRoomValidation), room_controller_1.RoomControllers.createRoom)
    .get('/', (0, auth_1.default)(users_constant_1.USER_ROLE.admin, users_constant_1.USER_ROLE.user), room_controller_1.RoomControllers.getAllRooms)
    .get('/:id', (0, auth_1.default)(users_constant_1.USER_ROLE.admin, users_constant_1.USER_ROLE.user), room_controller_1.RoomControllers.getRoomByID)
    .put('/:id', (0, auth_1.default)(users_constant_1.USER_ROLE.admin), (0, validateRequest_1.default)(room_validation_1.RoomValidations.updateRoomValidation), room_controller_1.RoomControllers.updateRoom)
    .delete('/:id', (0, auth_1.default)(users_constant_1.USER_ROLE.admin), room_controller_1.RoomControllers.deleteRoom);
exports.RoomRoutes = router;
