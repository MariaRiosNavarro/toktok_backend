import express from 'express';
import { register, login } from './auth.controller.js';

export const router = new express.Router();

router.post('/register', register);
router.post('/login', login);
