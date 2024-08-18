import { Router } from 'express';
import { ProductRoutes } from '../modules/product/product.route';
import { CategoryRoutes } from '../modules/category/category.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/categories',
    route: CategoryRoutes,
  },
  {
    path: '/products',
    route: ProductRoutes,
  },
];

// router.use('/users', UserRoutes);
// router.use('/students', StudentRoute);

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
