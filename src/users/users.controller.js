import { User } from './users.model.js';

export const getAllUsers = async (_, res, next) => {
  try {
    const users = await User.find().select({
      _id: 1,
      username: 1,
      img: 1,
      job: 1,
      posts: 1,
      // followers: 1,
      // following: 1,
      // favorites: 0,
      // name: 0,
      // description: 0,
    });
    res.json(users);
  } catch (err) {
    console.log(err);
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

export const getOtherUser = async (req, res, next) => {
  try {
    res.end();
  } catch (err) {
    next(err);
  }
};
