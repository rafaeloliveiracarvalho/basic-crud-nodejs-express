import { User } from '../models';

const verifyIfIsAdminMiddleware = async (req, res, next) => {
  const { id } = req.decoded;
  const { isAdm } = await User.findOne({ uuid: id }).exec();

  if (!isAdm) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  next();
};

export default verifyIfIsAdminMiddleware;
