import { loginService } from '../services';

const loginController = async (req, res) => {
  const { status, message } = await loginService(req);
  return res.status(status).json(message);
};

export default loginController;
