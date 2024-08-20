import { z } from 'zod';

const createCategoryValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    image: z.string(),
    isDeleted: z.boolean().default(false),
    status: z.string().default('active'),
  }),
});

export const CategoryValidation = { createCategoryValidationSchema };
