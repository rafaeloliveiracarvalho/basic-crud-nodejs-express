import { User } from '../models';

import { compareSync } from 'bcryptjs';

const verifyUserExistsMiddleware = async (req, res, next) => {
  const { email, password } = req.body;
  const foundUser = await User.findOne({ email }).exec();

  if (!foundUser) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  const checkPassword = compareSync(password, foundUser.password);

  if (!checkPassword) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  next();
};

export default verifyUserExistsMiddleware;
