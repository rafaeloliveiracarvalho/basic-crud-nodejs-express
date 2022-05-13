export const serializeUser = (user) => {
  const { password, _id, ...serializedUser } = user.toJSON();

  return serializedUser;
};
