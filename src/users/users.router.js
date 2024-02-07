import express from 'express';
import {
  getUser,
  getAllUsers,
  getLoginUserData,
  updateFollowStatus,
  editUser,
  addImage,
  getUserGalleryPosts,
  getUserFavorites,
} from '../users/users.controller.js';
import { verifyUser } from '../utils/middleware/auth.middleware.js';
import { upload } from '../config/storage.config.js';
import { limiter } from '../utils/middleware/server.middleware.js';

export const router = new express.Router();

router.get('/login-user', verifyUser, getLoginUserData);
router.get('/', verifyUser, limiter, getUser);
router.get('/all', verifyUser, getAllUsers);
router.patch('/follow', verifyUser, updateFollowStatus);
router.put('/edit', verifyUser, upload.none(), editUser);
router.put('/image', verifyUser, upload.single('img'), addImage);
router.get('/gallery', verifyUser, getUserGalleryPosts);
router.get('/favorites', verifyUser, getUserFavorites);
