import {z} from 'zod';

const createBookingZodSchema = z.object({
  body: z.object({
    date: z.string(),
    slots: z.array(z.string()),
    room: z.string(),
  }),
});

export const BookingValidation = {
  createBookingZodSchema,
};
