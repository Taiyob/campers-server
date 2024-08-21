import { Router } from 'express';
import { ProductRoutes } from '../modules/product/product.route';
import { CategoryRoutes } from '../modules/category/category.route';
import { BrandRoutes } from '../modules/brand/brand.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/brands',
    route: BrandRoutes,
  },
  {
    path: '/categories',
    route: CategoryRoutes,
  },
  {
    path: '/products',
    route: ProductRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
