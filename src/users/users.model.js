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

UserSchema.pre('updateOne', async function (next) {
  const update = this.getUpdate();
  const username = update.$set.username;

  if (username) {
    const userId = this.getQuery()._id;
    const existingUser = await mongoose.model('User').findOne({
      username,
      _id: { $ne: userId },
    });

    if (existingUser) {
      const error = new Error(
        'This username is already taken. Please pick another one.'
      );
      return next(error);
    }
  }

  return next();
});

export const User = mongoose.model('User', UserSchema);
