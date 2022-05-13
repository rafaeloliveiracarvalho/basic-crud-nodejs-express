const normalizeBodyFieldsToUpdateUser = (req, res, next) => {
  const {
    body: { name, email, password },
  } = req;

  if (!name && !email && !passwordx) {
    return res.status(400).json({ message: 'No data to update !!!' });
  }

  const newBody = {};

  if (name) newBody.name = name;
  if (email) newBody.email = email;
  if (password) newBody.password = password;

  req.body = { ...newBody };

  next();
};

export default normalizeBodyFieldsToUpdateUser;
