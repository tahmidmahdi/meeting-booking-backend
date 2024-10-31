import bcrypt from 'bcrypt';
import {model, Schema} from 'mongoose';
import config from '../../config';
import {IUser, UserModel} from './users.interface';
const userSchema = new Schema<IUser, UserModel>(
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
      select: 0,
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
  this.password = await bcrypt.hash(
    this.password as string,
    Number(config.bcrypt_salt_rounds)
  );
  next();
});

// userSchema.set('toJSON', {
//   transform: (doc, ret) => {
//     delete ret.password;
//     return ret;
//   },
// });

userSchema.statics.isUserExistByEmail = async function (email: string) {
  return await User.findOne({email}).select('+password');
};

userSchema.statics.isPasswordMatched = async function (
  password: string,
  hash: string
) {
  return await bcrypt.compare(password, hash);
};

export const User = model<IUser, UserModel>('User', userSchema);
