import {z} from 'zod';

const createRoomValidation = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Name is required',
      invalid_type_error: 'Name must be in string',
    }),
    roomNo: z.number({
      required_error: 'Room No is required',
      invalid_type_error: 'Room No must be in number',
    }),
    floorNo: z.number({
      required_error: 'Floor No is required',
      invalid_type_error: 'Floor No must be in number',
    }),
    capacity: z.number({
      required_error: 'Capacity is required',
      invalid_type_error: 'Capacity must be in number',
    }),
    pricePerSlot: z.number({
      required_error: 'Price per slot is required',
      invalid_type_error: 'Price per slot must be in number',
    }),
    amenities: z.array(z.string()),
    isDeleted: z.boolean().optional(),
  }),
});

export const RoomValidations = {
  createRoomValidation,
};
