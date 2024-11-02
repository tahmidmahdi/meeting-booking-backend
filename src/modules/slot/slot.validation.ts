import {z} from 'zod';

const createSlotValidation = z.object({
  body: z.object({
    room: z.string({
      invalid_type_error: 'Room must be in string',
      required_error: 'Room is required',
    }),
    date: z.string(),
    startTime: z.string({
      invalid_type_error: 'Start time must be in string',
      required_error: 'Start time is required',
    }),
    endTime: z.string({
      invalid_type_error: 'End time must be in string',
      required_error: 'End time is required',
    }),
    isBooked: z.boolean().optional(),
  }),
});

const checkSlotAvailabilityValidation = z.object({
  body: z.object({
    date: z.string({
      required_error: 'Date is required',
      invalid_type_error: 'Date should be in YYYY-MM-DD formate',
    }),
    room: z.string({required_error: 'Room id is required'}),
  }),
});

export const SlotValidations = {
  createSlotValidation,
  checkSlotAvailabilityValidation,
};
