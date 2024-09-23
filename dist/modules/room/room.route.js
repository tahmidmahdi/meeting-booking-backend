"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const room_controller_1 = require("./room.controller");
const room_validation_1 = require("./room.validation");
const router = express_1.default.Router();
router
    .post('/create-room', (0, validateRequest_1.default)(room_validation_1.RoomValidations.createRoomValidation), room_controller_1.RoomControllers.createRoom)
    .get('/', room_controller_1.RoomControllers.getAllRooms)
    .get('/:id', room_controller_1.RoomControllers.getRoomByID);
exports.RoomRoutes = router;
