import { User } from '../models';

const listUsersService = async () => {
  const listUsers = await User.find({});
  return listUsers;
};

export default listUsersService;
