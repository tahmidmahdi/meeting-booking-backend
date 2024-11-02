"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlotRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middlewares/auth"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const users_constant_1 = require("../users/users.constant");
const slot_controller_1 = require("./slot.controller");
const slot_validation_1 = require("./slot.validation");
const router = express_1.default.Router();
router
    .post('/create-slot', (0, auth_1.default)(users_constant_1.USER_ROLE.admin), (0, validateRequest_1.default)(slot_validation_1.SlotValidations.createSlotValidation), slot_controller_1.SlotControllers.createSlot)
    .get('/', (0, auth_1.default)(users_constant_1.USER_ROLE.admin), slot_controller_1.SlotControllers.getAllSlots)
    .get('/availability', (0, auth_1.default)(users_constant_1.USER_ROLE.admin, users_constant_1.USER_ROLE.user), 
// validateRequest(SlotValidations.checkSlotAvailabilityValidation),
slot_controller_1.SlotControllers.shotsByAvailability);
exports.SlotRoutes = router;
