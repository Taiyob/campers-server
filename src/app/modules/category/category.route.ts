import express from 'express';
import validateRequestMiddleware from '../../middlewares/validateRequest';
import { CategoryValidation } from './category.validation';
import { CategoryControllers } from './category.controller';

const router = express.Router();

router.post(
  '/',
  validateRequestMiddleware(CategoryValidation.createCategoryValidationSchema),
  CategoryControllers.createCategory,
);

export const CategoryRoutes = router;
