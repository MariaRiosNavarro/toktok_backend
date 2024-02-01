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

// api/users?id=65a6d2382ab44516cd28a0a3
export const getUser = async (req, res, next) => {
  const { id } = req.query;
  console.log({ id });

  try {
    const user = await User.findById(id).select({
      _id: 1,
      username: 1,
      img: 1,
      name: 1,
      job: 1,
      description: 1,
      website: 1,
      posts: 1,
      followers: 1,
      following: 1,
      favorites: 1,
      // email: 0,
      // birthday: 0,
      // telephone: 0,
      // password: 0,
      // salt: 0,
      // role: 0,
      // __v: 0,
      // updatedAt: 0,
      // createdAt: 0,
    });
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
