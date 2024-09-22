import bcrypt from 'bcrypt';
import {model, Schema} from 'mongoose';
import config from '../../config';
import {IUser} from './users.interface';
const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      trim: true,
      required: true,
    },
    password: {
      type: String,
      trim: true,
      required: true,
    },
    phone: {
      type: String,
      trim: true,
      required: true,
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
    address: {
      type: String,
      required: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre('save', async function (next) {
  const {password} = this;
  const encryptedPassword = await bcrypt.hash(
    password as string,
    Number(config.bcrypt_salt_rounds)
  );
  this.password = encryptedPassword;
  next();
});

userSchema.post('save', function (document, next) {
  delete document.password;
  next();
});

export const User = model<IUser>('User', userSchema);
