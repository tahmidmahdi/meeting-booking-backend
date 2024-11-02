"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlotRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const slot_controller_1 = require("./slot.controller");
const slot_validation_1 = require("./slot.validation");
const router = express_1.default.Router();
router
    .post('/create-slot', (0, validateRequest_1.default)(slot_validation_1.SlotValidations.createSlotValidation), slot_controller_1.SlotControllers.createSlot)
    .get('/', slot_controller_1.SlotControllers.getAllSlots);
exports.SlotRoutes = router;
