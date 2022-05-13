const allowedKeys = [
  'name',
  'email',
  'isAdm',
  'createdOn',
  'updatedOn',
  'uuid',
];

export const serializeUser = (user) => {
  const serializedUser = {};

  for (let key in user) {
    if (allowedKeys.includes(key)) {
      serializedUser[key] = user[key];
    }
  }

  return serializedUser;
};
