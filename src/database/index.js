import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGODB_LOCAL = process.env.MONGODB_LOCAL;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_LOCAL || MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose;
