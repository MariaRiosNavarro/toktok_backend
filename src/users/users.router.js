import express from 'express';
import {
  getUser,
  getAllUsers,
  getLoginUserData,
  updateFollowStatus,
  editUser,
  addImage,
} from '../users/users.controller.js';
import { verifyUser } from '../utils/middleware/auth.middleware..js';
import { upload } from '../config/storage.config.js';

export const router = new express.Router();

router.get('/login-user', verifyUser, getLoginUserData);
router.get('/', verifyUser, getUser);
router.get('/all', getAllUsers);
router.patch('/follow', verifyUser, updateFollowStatus);
router.put('/edit', verifyUser, upload.none(), editUser);
router.put('/image', verifyUser, upload.single('img'), addImage);
