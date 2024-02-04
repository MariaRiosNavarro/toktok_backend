import { Post } from "../posts/posts.model.js";
import { Comment } from "./comments.model.js";



export const createComment = async (req, res, next) => {
    const newComment= new Comment(req.body);
    try {
        const savedComment = await newComment.save()
        const post = await Post.findByIdAndUpdate(newComment.post, {
            $push: { comments: newComment },
          });

        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        
        res.status(201).json({message: 'comment saved'})
        if (!savedComment) {
            res.status(400).json({message:'Comment not saved! Try again.'});
        }
    } catch (err) {
        next(err);
    }
};

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