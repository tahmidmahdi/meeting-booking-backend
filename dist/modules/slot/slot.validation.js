"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlotValidations = void 0;
const zod_1 = require("zod");
const createSlotValidation = zod_1.z.object({
    body: zod_1.z.object({
        room: zod_1.z.string({
            invalid_type_error: 'Room must be in string',
            required_error: 'Room is required',
        }),
        date: zod_1.z.string(),
        startTime: zod_1.z.string({
            invalid_type_error: 'Start time must be in string',
            required_error: 'Start time is required',
        }),
        endTime: zod_1.z.string({
            invalid_type_error: 'End time must be in string',
            required_error: 'End time is required',
        }),
        isBooked: zod_1.z.boolean().optional(),
    }),
});
exports.SlotValidations = {
    createSlotValidation,
};
