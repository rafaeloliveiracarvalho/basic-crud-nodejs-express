import { User } from '../models';

const createUserService = async (userData) => {
  const newUser = await User.create({ ...userData });
  return newUser;
};

export default createUserService;
