import { User } from '../models';
import { serializeUser } from '../utils';

const listUsersService = async () => {
  let listUsers = await User.find({});

  listUsers = listUsers.map((user) => serializeUser(user));

  return listUsers;
};

export default listUsersService;
