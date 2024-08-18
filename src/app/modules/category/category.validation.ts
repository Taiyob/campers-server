import { z } from 'zod';

const createCategoryValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    isDeleted: z.boolean(),
    status: z.string(),
  }),
});

export const CategoryValidation = { createCategoryValidationSchema };
