import { User } from '../models';
import { serializeUser } from '../utils';
import { hash } from 'bcryptjs';

const updateUserService = async ({ userByParams, body }) => {
  const { uuid } = userByParams;

  if (body.password) {
    body.password = await hash(body.password, 10);
  }

  await User.updateOne({ uuid: uuid }, { ...body, updatedOn: Date.now() });

  const updatedUser = await User.findOne({ uuid: uuid }).exec();

  return serializeUser(updatedUser);
};

export default updateUserService;
