import { z } from 'zod';

const createBrandValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    image: z.string(),
    isDeleted: z.boolean().default(false),
    isFeatured: z.boolean().default(false),
  }),
});

export const BrandValidations = { createBrandValidationSchema };
