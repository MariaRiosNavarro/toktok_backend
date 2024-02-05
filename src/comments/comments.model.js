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
    parentComment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment',
      required: true,
    },
  },
  { timestamps: true }
  );
  
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
  },
  { timestamps: true }
  );
  
  export const Comment = mongoose.model('Comment', CommentSchema);
  export const CommentReply = mongoose.model('Reply', CommentReplySchema);