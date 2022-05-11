import { createUserService } from '../services';

const createUserController = async (req, res) => {
  const userData = req.body;
  try {
    const user = await createUserService(userData);

    return res.status(200).json(user);
  } catch (_) {
    res.status(400).json({ error: 'Register failed' });
  }
};

export default createUserController;
