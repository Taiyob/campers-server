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

router.get('/', ProductControllers.getAllProduct);

router.get('/featured-product', ProductControllers.getAllFeaturedProduct);

export const ProductRoutes = router;
