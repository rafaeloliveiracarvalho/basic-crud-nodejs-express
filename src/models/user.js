import mongoose from '../database';
import { v4 as uuid4 } from 'uuid';
import { hashSync } from 'bcryptjs';

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
    },
    isAdm: {
      type: Boolean,
      default: false,
    },
    createdOn: {
      type: Date,
    },
    updatedOn: {
      type: Date,
    },
    uuid: {
      type: String,
    },
  },
  {
    collection: 'users',
    versionKey: false,
  },
);

UserSchema.pre('save', function (next) {
  const hashedPassword = hashSync(this.password, 10);
  this.password = hashedPassword;
  this.uuid = uuid4();
  this.createdOn = Date.now();
  this.updatedOn = Date.now();
  next();
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
