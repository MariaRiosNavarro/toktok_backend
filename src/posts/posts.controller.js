import { User } from '../users/users.model.js';
import { Post } from './posts.model.js';
import { uploadImage } from '../config/storage.config.js';
import cloudinary from 'cloudinary'


export const createPost = async (req, res, next) => {
    const newPost = new Post(req.body);

    try {
        const cloudinaryResult = await uploadImage(req.file.buffer);
        newPost.img = cloudinaryResult.secure_url;
        newPost.cloudinaryId = cloudinaryResult.public_id;
        const savedPost = await newPost.save();
        if (!savedPost) {
            res.status(400).json({message:'Post not saved! Try again.'});
        }

        // * Funktion um den Post direkt in den User zu pushen 
        const user = await User.findById(newPost.user);
        if (!user) {
          return res.status(404).json({ message: 'User not found!' });
        }
        user.posts.push(savedPost._id);
        await user.save();
        res.status(201).json({ message: 'Post sucessfully created!'});
    } catch (err) {
        next(err);
    }
};

export const updatePost = async (req, res, next) => {
    const postId = req.params.id;
    const updatedPost = req.body;

    try {
      const post = await Post.findById(postId);
      if (!post) {
        return res.status(404).json({ message: 'Post not found!' });
      }
      if (req.file) {
        const cloudinaryResult = await uploadImage(req.file.buffer);
        updatedPost.img = cloudinaryResult.secure_url;
        updatedPost.cloudinaryId = cloudinaryResult.public_id;
        await cloudinary.v2.uploader.destroy(post.cloudinaryId);
      }
      const savedPost = await Post.findByIdAndUpdate(postId, { $set: updatedPost,  new: true });
      res.status(200).json({ message: 'Post sucessfully updated!', post: savedPost });
    } catch (err) {
      next(err);
    }
  };
  
  export const deletePost = async (req, res, next) => {
    const postId = req.params.id;
  
    try {
      const post = await Post.findById(postId);
      if (!post) {
        return res.status(404).json({ message: 'Post not found!' });
      }
  
      const user = await User.findById(post.user);
      if (!user) {
        return res.status(404).json({ message: 'User not found!' });
      }
  
      user.posts = user.posts.filter(userPostId => userPostId.toString() !== postId);
  
      await user.save();
  
      await Post.findByIdAndDelete(postId);
  
      res.status(200).json({ message: 'Post successfully deleted!' });
    } catch (err) {
      next(err);
    }
  };
  
  export const getPost = async (req, res, next) => {
    const postId = req.params.id
    try {
      const post = await Post.findById(postId).populate('comments');
      console.log(post);
      res.status(200).json(post)
    } catch (err) {
      next(err);
    }
  };
  
  export const getPosts = async (req, res, next) => {
    try {
      const posts = await Post.find()
      res.status(200).json(posts)
    } catch (err) {
      next(err);
    }
  };