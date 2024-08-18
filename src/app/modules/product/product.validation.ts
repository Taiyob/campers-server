import { z } from 'zod';

const createProductValidationSchema = z.object({
  body: z.object({
    name: z.string().min(3).max(20),
    price: z.number(),
    stockQuantity: z.number(),
    description: z.string(),
    categoryId: z.string(),
    isDeleted: z.boolean().default(false),
    status: z.boolean().default(true),
  }),
});

export const ProductValidations = { createProductValidationSchema };
