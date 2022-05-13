import { User } from '../models';
import { serializeUser } from '../utils';

const createUserService = async ({ body }) => {
  const newUser = await User.create({ ...body });

  const serializedUser = serializeUser(newUser);

  return serializedUser;
};

export default createUserService;
