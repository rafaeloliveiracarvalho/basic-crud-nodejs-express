import { User } from '../models';

const verifyEmailMiddleware = async (req, res, next) => {
  const { email } = req.body;
  const foundUser = await User.findOne({ email }).exec();

  if (foundUser) {
    return res.status(400).json({ message: 'E-mail already registered' });
  }

  next();
};

export default verifyEmailMiddleware;
