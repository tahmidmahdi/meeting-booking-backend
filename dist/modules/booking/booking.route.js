"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middlewares/auth"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const users_constant_1 = require("../users/users.constant");
const booking_controller_1 = require("./booking.controller");
const booking_validation_1 = require("./booking.validation");
const router = express_1.default.Router();
router
    .post('/create-booking', (0, auth_1.default)(users_constant_1.USER_ROLE.user, users_constant_1.USER_ROLE.admin), (0, validateRequest_1.default)(booking_validation_1.BookingValidation.createBookingZodSchema), booking_controller_1.BookingControllers.createBooking)
    .get('/', (0, auth_1.default)(users_constant_1.USER_ROLE.admin), booking_controller_1.BookingControllers.getAllBooking)
    .get('/my-booking', (0, auth_1.default)(users_constant_1.USER_ROLE.user, users_constant_1.USER_ROLE.admin), booking_controller_1.BookingControllers.getMyBooking)
    .put('/:id', (0, auth_1.default)(users_constant_1.USER_ROLE.admin), booking_controller_1.BookingControllers.updateBooking)
    .delete('/:id', (0, auth_1.default)(users_constant_1.USER_ROLE.admin), booking_controller_1.BookingControllers.deleteBooking);
exports.BookingRoutes = router;
