import mongoose from "mongoose";

const CommentReplySchema = new mongoose.Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
  });
  
  const CommentSchema = new mongoose.Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post',
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    replies: [
      {
        type: CommentReplySchema,
        required: true,
      },
    ],
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
  });
  
  export const Comment = mongoose.model('Comment', CommentSchema);
  export const CommentReply = mongoose.model('CommentReply', CommentReplySchema);