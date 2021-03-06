import { User } from '../models';

const verifyUserPermissionMiddleware = async (req, res, next) => {
  const { id } = req.decoded;
  const loggedUser = await User.findOne({ uuid: id }).exec();

  if (loggedUser.isAdm) return next();

  const { uuid } = req.userByParams;

  if (uuid !== id)
    return res.status(403).json({
      message: 'Missing admin permissions',
    });

  return next();
};

export default verifyUserPermissionMiddleware;
