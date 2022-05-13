import { createUserService } from '../services';

const createUserController = async (req, res) => {
  try {
    const user = await createUserService(req);
    return res.status(200).json(user);
  } catch (_) {
    res.status(400).json({ error: 'Register failed' });
  }
};

export default createUserController;
