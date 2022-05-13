import { decode } from 'jsonwebtoken';
import { User } from '../models';

const verifyIfIsAdminMiddleware = async (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];
  const { id } = decode(token);

  const { isAdm } = await User.findOne({ uuid: id }).exec();

  if (!isAdm) {
    return res
      .status(401)
      .json({ message: 'Only administrators can access this information' });
  }

  next();
};

export default verifyIfIsAdminMiddleware;
