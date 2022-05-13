import { listUsersService } from '../services';

const listUsersController = async (_, res) => {
  const usersList = await listUsersService();

  return res.status(200).json(usersList);
};

export default listUsersController;
