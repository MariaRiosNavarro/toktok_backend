import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      // required: true,
      unique: true,
    },
    name: {
      type: String,
      // required: true,
    },
    password: {
      type: String,
      required: true,
    },
    telephone: {
      type: String,
      // required: true,
    },
    salt: {
      type: String,
      required: true,
    },
    birthday: {
      type: Date,
    },
    description: {
      type: String,
    },
    job: {
      type: String,
    },
    posts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
      },
    ],
    followers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    following: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    favorites: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
      },
    ],
    role: {
      type: String,
      default: 'user',
    },
    img: {
      type: String,
    },
    cloudinary_id: {
      type: String,
    },
    website: {
      type: String,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model('User', UserSchema);
