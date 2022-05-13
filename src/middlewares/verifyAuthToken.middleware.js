import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const verifyAuthTokenMiddleware = (req, res, next) => {
  let token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Missing authorization token' });
  }

  token = token.split(' ')[1];

  jwt.verify(token, process.env.SECRET_KEY, (error, decode) => {
    if (error) {
      return res.status(401).json({ message: 'Invalid token' });
    }
    next();
  });
};

export default verifyAuthTokenMiddleware;
