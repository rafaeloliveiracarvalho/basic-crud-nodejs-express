import { Router } from 'express';

import {
  createUserController,
  getUserProfileController,
  listUsersController,
  updateUserController,
  deleteUserController,
} from '../controllers';

import {
  verifyEmailMiddleware,
  verifyIfIsAdminMiddleware,
  verifyAuthTokenMiddleware,
  getUserByParamsOr404Middleware,
  verifyUserPermissionMiddleware,
  normalizeBodyFieldsToUpdateUser,
} from '../middlewares';

const router = Router();

router.post('/', verifyEmailMiddleware, createUserController);
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
  normalizeBodyFieldsToUpdateUser,
  getUserByParamsOr404Middleware,
  verifyUserPermissionMiddleware,
  updateUserController,
);

router.delete(
  '/:uuid',
  verifyAuthTokenMiddleware,
  getUserByParamsOr404Middleware,
  verifyUserPermissionMiddleware,
  deleteUserController,
);

export default router;
