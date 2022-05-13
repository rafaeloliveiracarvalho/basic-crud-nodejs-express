import { Router } from 'express';

import {
  createUserController,
  getUserProfileController,
  listUsersController,
} from '../controllers';

import {
  verifyEmailMiddleware,
  verifyIfIsAdminMiddleware,
  verifyAuthTokenMiddleware,
} from '../middlewares';

const router = Router();

router.post('/register', verifyEmailMiddleware, createUserController);
router.get(
  '',
  verifyAuthTokenMiddleware,
  verifyIfIsAdminMiddleware,
  listUsersController,
);
router.get('/profile', verifyAuthTokenMiddleware, getUserProfileController);

export default router;
