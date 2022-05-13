import { User } from '../models';
import { serializeUser } from '../utils';

const getUserProfileController = async (req, res) => {
  const { id } = req.decoded;
  const user = serializeUser(await User.findOne({ uuid: id }).exec());

  return res.status(200).json(user);
};

export default getUserProfileController;
