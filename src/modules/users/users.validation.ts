import {z} from 'zod';

const createUserValidationSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Name is required',
      invalid_type_error: 'Name must be string',
    }),
    email: z.string().email(),
    password: z.string().min(8).max(32).optional(),
    phone: z.string({
      required_error: 'Phone number is required',
      invalid_type_error: 'Phone number must be in string',
    }),
    address: z.string({
      required_error: 'Address is required',
      invalid_type_error: 'Address must be string',
    }),
    role: z.enum(['user', 'admin']),
    isDeleted: z.boolean().optional(),
  }),
});

export const usersValidation = {
  createUserValidationSchema,
};
