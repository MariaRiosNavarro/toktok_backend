import jwt from 'jsonwebtoken';
import { createError } from './error.middleware.js';
import { verifyToken } from '../../auth/auth.service.js';

export const verifyUser = (req, res, next) => {
  try {
    req.payload = verifyToken(req.cookies.toktok);
    next();
  } catch (err) {
    console.log(err);
    // res.status(401).end();
    return next(createError(403, 'You are not authorized!'));
  }
};

export const verifyEmail = (req, res, next) => {
  try {
    req.payload = verifyToken(req.cookies.toktok_verifyemail);
    next();
  } catch (err) {
    console.log(err);
    res.status(401).end();
    next(createError(403, 'You are not authorized!'));
  }
};
