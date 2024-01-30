import { User } from './users.model.js';

export const updateUser = async (req, res, next) => {
  try {
    res.end();
  } catch (err) {
    next(err);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    res.end();
  } catch (err) {
    next(err);
  }
};

export const getUser = async (req, res, next) => {
  const user = req.body.user;
  try {
    res.json({ user });
  } catch (err) {
    next(err);
  }
};

export const getUsers = async (req, res, next) => {
  try {
    res.end();
  } catch (err) {
    next(err);
  }
};
