import { User } from '../models';

const createUserService = async ({ body }) => {
  const newUser = await User.create({ ...body });

  const allowedKeys = [
    'name',
    'email',
    'password',
    'isAdm',
    'createdOn',
    'updatedOn',
    'uuid',
  ];

  const user = {};

  for (let key in newUser) {
    if (allowedKeys.includes(key)) {
      user[key] = newUser[key];
    }
  }
  return user;
};

export default createUserService;
