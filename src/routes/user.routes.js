import { Router } from 'express';

import { createUserController, listUsersController } from '../controllers';

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

export default router;
