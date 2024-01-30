import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';

export const app = express();

app.use(cors({ credentials: true, origin: process.env.ALLOWED_ORIGIN }));
app.use(express.json());
app.use(morgan('dev'));
app.use(cookieParser());
