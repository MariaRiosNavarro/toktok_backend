import express from 'express';
import {
  updateUser,
  deleteUser,
  getUser,
  getAllUsers,
  getLoginUserData,
  updateFollowStatus,
} from '../users/users.controller.js';
import { verifyUser } from '../utils/middleware/auth.middleware..js';

export const router = new express.Router();

router.get('/login-user', verifyUser, getLoginUserData);
router.get('/', verifyUser, getUser);
router.get('/all', getAllUsers);
router.patch('/follow', verifyUser, updateFollowStatus);
