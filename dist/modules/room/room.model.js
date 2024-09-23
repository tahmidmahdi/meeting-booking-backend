"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Room = void 0;
const mongoose_1 = require("mongoose");
const roomSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    roomNo: {
        type: Number,
        trim: true,
        required: true,
    },
    floorNo: {
        type: Number,
        trim: true,
        required: true,
    },
    pricePerSlot: {
        type: Number,
        trim: true,
        required: true,
    },
    capacity: {
        type: Number,
        trim: true,
        required: true,
    },
    amenities: [
        {
            type: String,
            required: true,
        },
    ],
    isDeleted: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true,
});
exports.Room = (0, mongoose_1.model)('Room', roomSchema);
