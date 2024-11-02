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

const updateRoomValidation = z.object({
  body: z.object({
    name: z
      .string({
        required_error: 'Name is required',
        invalid_type_error: 'Name must be in string',
      })
      .optional(),
    roomNo: z
      .number({
        required_error: 'Room No is required',
        invalid_type_error: 'Room No must be in number',
      })
      .optional(),
    floorNo: z
      .number({
        required_error: 'Floor No is required',
        invalid_type_error: 'Floor No must be in number',
      })
      .optional(),
    capacity: z
      .number({
        required_error: 'Capacity is required',
        invalid_type_error: 'Capacity must be in number',
      })
      .optional(),
    pricePerSlot: z
      .number({
        required_error: 'Price per slot is required',
        invalid_type_error: 'Price per slot must be in number',
      })
      .optional(),
    amenities: z.array(z.string()).optional(),
    isDeleted: z.boolean().optional().optional(),
  }),
});

export const RoomValidations = {
  createRoomValidation,
  updateRoomValidation,
};
