import { Post } from "../posts/posts.model.js";
import { Comment } from "./comments.model.js";

export const createComment = async (req, res, next) => {
    const newComment= new Comment(req.body);
    const postId = req.body.post
    try {
        const savedComment = await newComment.save()

        const post = await Post.findByIdAndUpdate(postId, {
            $push: { comments: newComment._id },
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
  
    try {
        res.end()
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