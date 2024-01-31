import { User } from '../../../users/users.model.js';

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
  const user = ['der fake array'];
  try {
    res.json(user);
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
