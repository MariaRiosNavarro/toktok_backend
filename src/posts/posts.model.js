import mongoose from 'mongoose';
import { Comment } from '../comments/comments.model.js';

const PostSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    cloudinaryId: {
      type: String,
    },
    description: {
      type: String,
      // hashtags mit in der description
    },
    location: {
      type: String,
    },
    facebook: {
      type: Boolean,
      default: false,
    },
    twitter: {
      type: Boolean,
      default: false,
    },
    tumblr: {
      type: Boolean,
      default: false,
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    comments: [
      {
        type: Comment.schema,
        required: true,
      },
    ],
  },
  { timestamps: true }
);

export const Post = mongoose.model('Post', PostSchema);
