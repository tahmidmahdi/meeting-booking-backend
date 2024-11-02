"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlotServices = void 0;
const mongoose_1 = require("mongoose");
const slot_model_1 = require("./slot.model");
const slot_utils_1 = __importStar(require("./slot.utils"));
const createSlotIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const session = yield (0, mongoose_1.startSession)();
    try {
        session.startTransaction();
        const { startTime, endTime, room, date } = payload;
        const startTimeInMinutes = (0, slot_utils_1.default)(startTime);
        const endTimeInMinutes = (0, slot_utils_1.default)(endTime);
        const totalDuration = endTimeInMinutes - startTimeInMinutes;
        const totalSlots = Math.floor(totalDuration / 60);
        const slots = (0, slot_utils_1.generateSlotTimeInterval)(startTimeInMinutes, totalSlots, room, date);
        const response = yield slot_model_1.Slot.insertMany(slots, { session });
        yield session.commitTransaction();
        yield session.endSession();
        return response;
    }
    catch (error) {
        console.log(error);
        yield session.abortTransaction();
        yield session.endSession();
        throw new Error('Failed to create slot');
    }
});
const getAllSlotsFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield slot_model_1.Slot.find().populate('room');
    return response;
});
const checkSlotAvailability = (payload, query) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(query);
    const response = yield slot_model_1.Slot.find({
        date: query ? query.date : payload.date,
        room: query ? query.room : payload.room,
        isBooked: !query ? false : true,
    });
    return response;
});
exports.SlotServices = {
    createSlotIntoDB,
    getAllSlotsFromDB,
    checkSlotAvailability,
};
