import { User } from '../models';

const getUserByParamsOr404Middleware = async (req, res, next) => {
  const { uuid } = req.params;
  const foundUser = await User.findOne({ uuid: uuid }).exec();

  if (!foundUser) return res.status(404).json({ message: 'User not found' });

  req.userByParams = foundUser;

  next();
};

export default getUserByParamsOr404Middleware;
