import express from 'express';
import { ProductControllers } from './product.controller';
import validateRequestMiddleware from '../../middlewares/validateRequest';
import { ProductValidations } from './product.validation';

const router = express.Router();

router.post(
  '/',
  validateRequestMiddleware(ProductValidations.createProductValidationSchema),
  ProductControllers.createProduct,
);

export const ProductRoutes = router;
