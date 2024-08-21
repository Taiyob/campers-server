import express from 'express';
import validateRequestMiddleware from '../../middlewares/validateRequest';
import { BrandValidations } from './brand.validation';
import { BrandControllers } from './brand.controller';

const router = express.Router();

router.post(
  '/',
  validateRequestMiddleware(BrandValidations.createBrandValidationSchema),
  BrandControllers.createBrand,
);

export const BrandRoutes = router;
