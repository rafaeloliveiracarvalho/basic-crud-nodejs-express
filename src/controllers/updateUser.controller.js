import { updateUserService } from '../services';

const updateUserController = async (req, res) => {
  const updatedUser = await updateUserService(req);

  return res.status(200).json(updatedUser);
};

export default updateUserController;
