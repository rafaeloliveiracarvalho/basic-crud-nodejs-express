import { User } from '../models';

import { compareSync } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const loginService = async ({ body }) => {
  const { email, password } = body;
  const foundUser = await User.findOne({ email }).exec();

  if (!foundUser || !password) {
    return { status: 401, message: { message: 'Wrong email/password' } };
  }

  const checkPassword = compareSync(password, foundUser.password);

  if (!checkPassword) {
    return { status: 401, message: { message: 'Wrong email/password' } };
  }

  const token = sign({ id: foundUser.uuid }, process.env.SECRET_KEY, {
    expiresIn: process.env.EXPIRATION_TOKEN,
  });

  return { status: 200, message: { token } };
};

export default loginService;
