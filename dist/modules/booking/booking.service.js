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
exports.BookingService = void 0;
const booking_model_1 = require("./booking.model");
const createBookingIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = (yield (yield (yield booking_model_1.Booking.create(payload)).populate('slots')).populate('room')).populate('user');
    return result;
});
const getAllBookingFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield booking_model_1.Booking.find({})
        .populate('slots')
        .populate('room')
        .populate('user');
    return result;
});
const getMyBookingFromDB = (userID) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield booking_model_1.Booking.find({ user: userID })
        .populate('slots')
        .populate('room')
        .populate('user');
    return result;
});
const updateBookingFromDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield booking_model_1.Booking.findByIdAndUpdate(id, payload, { new: true });
    return result;
});
const deleteBookingFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield booking_model_1.Booking.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
    return [];
});
exports.BookingService = {
    createBookingIntoDB,
    getAllBookingFromDB,
    getMyBookingFromDB,
    updateBookingFromDB,
    deleteBookingFromDB,
};
