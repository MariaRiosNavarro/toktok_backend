import { Post } from "../posts/posts.model.js";
import { Comment, CommentReply } from "./comments.model.js";

export const createComment = async (req, res, next, isCommentOnComment = false) => {
  const newReplyComment = new CommentReply(req.body);
  const newComment = new Comment(req.body);

  try {
    if (isCommentOnComment) {
      // * newReplyComment on Comment
      const parentComment = await Comment.findByIdAndUpdate(req.body.parentComment, {
        $push: { replies: newReplyComment },
      });

      if (!parentComment) {
        return res.status(404).json({ message: 'Parent comment not found' });
      }

      const savedReplyComment = await newReplyComment.save();

      const post = await Post.findByIdAndUpdate(parentComment.post, {
        $push: { 'comments.$[comment].replies': newReplyComment },
      }, { arrayFilters: [{ 'comment._id': parentComment._id }] });

      if (!savedReplyComment) {
        return res.status(400).json({ message: 'Reply not saved! Try again.' });
      }

      return res.status(201).json({ message: 'Reply saved successfully' });
    } else {
      // * newComment on Post
      const post = await Post.findByIdAndUpdate(newComment.post, {
        $push: { comments: newComment },
      });

      if (!post) {
        return res.status(404).json({ message: 'Post not found' });
      }

      const savedComment = await newComment.save();

      if (!savedComment) {
        return res.status(400).json({ message: 'Comment not saved! Try again.' });
      }

      return res.status(201).json({ message: 'Comment saved successfully' });
    }
  } catch (err) {
    next(err);
  }
};

// wie korrigiere ich die create Comment funktion um bei isCommentOnComment das Comment im CommentReplySchema in dem CommentSchema gespeichert wird und gleichzeit 

export const updateComment = async (req, res, next) => {

    try {
        res.end()
    } catch (err) {
      next(err);
    }
  };
  
  export const deleteComment = async (req, res, next) => {
    const commentId = req.params.id;
  
    try {
      console.log('Comment ID:', commentId);
      const comment = await Comment.findById(commentId);
      
      if (!comment) {
        return res.status(404).json({ message: 'Comment not found' });
      }
      
      const post = await Post.findById(comment.post);
      if (!post) {
        return res.status(404).json({ message: 'Post not found' });
      }
      console.log('Post Comments:', post.comments);
  
      if (post.comments && post.comments.length > 0) {
        post.comments = post.comments.filter(postComment => postComment._id.toString() !== commentId.toString());
      }
  
      await post.save();
  
      await Comment.findByIdAndDelete(commentId);
  
      res.status(200).json({ message: 'Comment deleted' });
    } catch (err) {
      next(err);
    }
  };
  
  
  export const getComment = async (req, res, next) => {

    try {
        res.end()
    } catch (err) {
      next(err);
    }
  };
  
  export const getComments = async (req, res, next) => {
    try {

    } catch (err) {
      next(err);
    }
  };