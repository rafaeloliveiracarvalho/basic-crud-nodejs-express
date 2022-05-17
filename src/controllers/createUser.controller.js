import { createUserService } from '../services';

const createUserController = async (req, res) => {
  try {
    const user = await createUserService(req);
    return res.status(201).json(user);
  } catch (_) {
    res.status(400).json({
      error: 'Register failed',
      necessaryFields: {
        name: 'string',
        email: 'string',
        password: 'string',
        isAdm: 'boolean',
      },
    });
  }
};

export default createUserController;
