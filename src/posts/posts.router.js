import express from 'express';
import {
  createPost,
  deletePost,
  getPost,
  getPosts,
  updateFavoriteStatus,
  updatePost,
} from './posts.controller.js';
import { upload } from '../config/storage.config.js';
import { createComment } from '../comments/comments.controller.js';
import { verifyUser } from '../utils/middleware/auth.middleware..js';

export const router = new express.Router();

// CREATE
router.post('/upload', upload.single('img'), verifyUser, createPost);
// UPDATE
router.put('/editpost/:id', upload.single('img'), verifyUser, updatePost);
// DELETE
router.delete('/:id', verifyUser, deletePost);
// GET ONE
router.get('/:id', verifyUser, getPost);
// CREATE COMMENT
router.post('/:id/commit', verifyUser, async (req, res, next) => {
  try {
    await createComment(req, res, next, false); // Der dritte Parameter ist false für einen Beitrag
  } catch (err) {
    next(err);
  }
});

// GET ALL
router.get('/', verifyUser, getPosts);

// UPDATE FAVORITES / LIKES
router.patch('/like', verifyUser, updateFavoriteStatus);
