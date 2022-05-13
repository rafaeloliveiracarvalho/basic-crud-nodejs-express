import { User } from '../models';

const deleteUserController = async (req, res) => {
  const { uuid } = req.userByParams;
  await User.deleteOne({ uuid: uuid }).exec();

  return res.status(200).json({ message: 'User deleted with success' });
};

export default deleteUserController;
