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

UserSchema.options.toObject = {};
UserSchema.options.toObject.transform = function (_, ret) {
  delete ret._id;
  return ret;
};

UserSchema.pre('save', function (next) {
  const hashedPassword = hashSync(this.password, 10);
  this.password = hashedPassword;
  next();
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
