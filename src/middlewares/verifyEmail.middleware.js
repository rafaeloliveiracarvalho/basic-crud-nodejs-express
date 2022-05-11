import { User } from '../models';

const verifyEmailMiddleware = async (req, res, next) => {
  const { email } = req.body;
  const foundUser = await User.findOne({ email }).exec();

  if (foundUser) {
    return res.status(409).json({ message: 'This email already being used' });
  }

  next();
};

export default verifyEmailMiddleware;
