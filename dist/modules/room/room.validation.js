"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomValidations = void 0;
const zod_1 = require("zod");
const createRoomValidation = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            required_error: 'Name is required',
            invalid_type_error: 'Name must be in string',
        }),
        roomNo: zod_1.z.number({
            required_error: 'Room No is required',
            invalid_type_error: 'Room No must be in number',
        }),
        floorNo: zod_1.z.number({
            required_error: 'Floor No is required',
            invalid_type_error: 'Floor No must be in number',
        }),
        capacity: zod_1.z.number({
            required_error: 'Capacity is required',
            invalid_type_error: 'Capacity must be in number',
        }),
        pricePerSlot: zod_1.z.number({
            required_error: 'Price per slot is required',
            invalid_type_error: 'Price per slot must be in number',
        }),
        amenities: zod_1.z.array(zod_1.z.string()),
        isDeleted: zod_1.z.boolean().optional(),
    }),
});
const updateRoomValidation = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z
            .string({
            required_error: 'Name is required',
            invalid_type_error: 'Name must be in string',
        })
            .optional(),
        roomNo: zod_1.z
            .number({
            required_error: 'Room No is required',
            invalid_type_error: 'Room No must be in number',
        })
            .optional(),
        floorNo: zod_1.z
            .number({
            required_error: 'Floor No is required',
            invalid_type_error: 'Floor No must be in number',
        })
            .optional(),
        capacity: zod_1.z
            .number({
            required_error: 'Capacity is required',
            invalid_type_error: 'Capacity must be in number',
        })
            .optional(),
        pricePerSlot: zod_1.z
            .number({
            required_error: 'Price per slot is required',
            invalid_type_error: 'Price per slot must be in number',
        })
            .optional(),
        amenities: zod_1.z.array(zod_1.z.string()).optional(),
        isDeleted: zod_1.z.boolean().optional().optional(),
    }),
});
exports.RoomValidations = {
    createRoomValidation,
    updateRoomValidation,
};
