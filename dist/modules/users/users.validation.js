"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersValidation = void 0;
const zod_1 = require("zod");
const createUserValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            required_error: 'Name is required',
            invalid_type_error: 'Name must be string',
        }),
        email: zod_1.z.string().email(),
        password: zod_1.z.string().min(8).max(32).optional(),
        phone: zod_1.z.string({
            required_error: 'Phone number is required',
            invalid_type_error: 'Phone number must be in string',
        }),
        address: zod_1.z.string({
            required_error: 'Address is required',
            invalid_type_error: 'Address must be string',
        }),
        role: zod_1.z.enum(['user', 'admin']),
        isDeleted: zod_1.z.boolean().optional(),
    }),
});
exports.usersValidation = {
    createUserValidationSchema,
};
