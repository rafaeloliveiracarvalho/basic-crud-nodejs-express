import { User } from '../models';

const listUsersService = async () => {
  let listUsers = await User.find({});

  listUsers = listUsers.map((user) => user.toObject());

  return listUsers;
};

export default listUsersService;
