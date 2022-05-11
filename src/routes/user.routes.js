import { Router } from 'express';

import createUserController from '../controllers/createUser.controller';

import verifyEmailMiddleware from '../middlewares/verifyEmail.middleware';

const router = Router();

router.get('', (req, res) => {
  res.status(200).send('OK');
});

router.post('/register', verifyEmailMiddleware, createUserController);

export default router;
