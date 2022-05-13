import { Router } from 'express';

import {
  createUserController,
  getUserProfileController,
  listUsersController,
  updateUserController,
} from '../controllers';

import {
  verifyEmailMiddleware,
  verifyIfIsAdminMiddleware,
  verifyAuthTokenMiddleware,
  getUserByParamsOr404Middleware,
  verifyUserPermissionMiddleware,
} from '../middlewares';

const router = Router();

router.post('/register', verifyEmailMiddleware, createUserController);
router.get('/profile', verifyAuthTokenMiddleware, getUserProfileController);
router.get(
  '',
  verifyAuthTokenMiddleware,
  verifyIfIsAdminMiddleware,
  listUsersController,
);
router.patch(
  '/:uuid',
  verifyAuthTokenMiddleware,
  getUserByParamsOr404Middleware,
  verifyUserPermissionMiddleware,
  updateUserController,
);

export default router;
