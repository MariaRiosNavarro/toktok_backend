// FAKE APP
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';

export const app = express();

import { router as usersRouter } from '../../../users/users.router.js';
import { router as postsRouter } from '../../../posts/posts.router.js';
import { router as authRouter } from '../../../auth/auth.router.js';

app.use(cors({ credentials: true, origin: process.env.ALLOWED_ORIGIN }));
app.use(express.json());
app.use(morgan('dev'));
app.use(cookieParser());

app.use('/api/users', usersRouter);
app.use('/api/posts', postsRouter);
app.use('/api/auth', authRouter);
