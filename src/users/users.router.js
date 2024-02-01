import express from 'express';
import {
  updateUser,
  deleteUser,
  getUser,
  getAllUsers,
} from '../users/users.controller.js';
import { verifyUser } from '../utils/middleware/auth.middleware..js';

export const router = new express.Router();

// router.get('/', verifyUser, getUser);
router.get('/', getUser);

router.get('/all', getAllUsers);
