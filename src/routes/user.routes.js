import { Router } from 'express';

import { createUserController, listUsersController } from '../controllers';

import verifyEmailMiddleware from '../middlewares/verifyEmail.middleware';

const router = Router();

router.post('/register', verifyEmailMiddleware, createUserController);
router.get('', listUsersController);

export default router;
