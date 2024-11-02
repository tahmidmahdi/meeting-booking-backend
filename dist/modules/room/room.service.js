"use strict";
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
exports.RoomServices = void 0;
const room_model_1 = require("./room.model");
const createRoomIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield room_model_1.Room.create(payload);
    return response;
});
const getAllRoomsFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield room_model_1.Room.find();
    return response;
});
const getRoomFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield room_model_1.Room.findById(id);
    return response;
});
const updateRoomIntoDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield room_model_1.Room.findByIdAndUpdate(id, payload, { new: true });
    return response;
});
exports.RoomServices = {
    createRoomIntoDB,
    getAllRoomsFromDB,
    getRoomFromDB,
    updateRoomIntoDB,
};
