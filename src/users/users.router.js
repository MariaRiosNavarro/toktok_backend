import express from 'express';
import {
  updateUser,
  deleteUser,
  getUser,
  getAllUsers,
  getLoginUserData,
} from '../users/users.controller.js';
import { verifyUser } from '../utils/middleware/auth.middleware..js';

export const router = new express.Router();

router.get('/login-user', verifyUser, getLoginUserData);
router.get('/', verifyUser, getUser); // brauchen wir die middleware hier noch???
router.get('/all', getAllUsers);
