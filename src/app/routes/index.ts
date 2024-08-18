import { Router } from 'express';

const router = Router();

const moduleRoutes = [
  {
    path: '/users',
    //route: ,
  },
];

// router.use('/users', UserRoutes);
// router.use('/students', StudentRoute);

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
