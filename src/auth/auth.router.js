import express from 'express';
import { register, login, signUp } from './auth.controller.js';
import { verifyEmail } from '../utils/middleware/auth.middleware..js';

export const router = new express.Router();

router.post('/sign-up', signUp);
router.post('/register', verifyEmail, register);
router.post('/login', login);
