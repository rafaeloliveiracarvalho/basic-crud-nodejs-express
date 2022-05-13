import { Router } from 'express';

import { loginController } from '../controllers';

const router = Router();

router.post('', loginController);

export default router;
