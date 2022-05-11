import mongoose from '../database';
import { v4 as uuid4 } from 'uuid';
import * as bcrypt from 'bcryptjs';

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    isAdm: {
      type: Boolean,
      default: false,
    },
    createdOn: {
      type: Date,
      default: Date.now(),
    },
    updatedOn: {
      type: Date,
      default: Date.now(),
    },
    uuid: {
      type: String,
      default: uuid4(),
    },
  },
  {
    collection: 'users',
    versionKey: false,
  },
);

UserSchema.pre('save', async function (next) {
  const hashedPassword = await bcrypt.hash(this.password, 10);
  this.password = hashedPassword;
  next();
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
