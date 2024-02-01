import express from 'express';
import {
  updateUser,
  deleteUser,
  getUser,
  getAllUsers,
} from '../users/users.controller.js';

export const router = new express.Router();

router.get('/', getUser);
router.get('/all', getAllUsers);
