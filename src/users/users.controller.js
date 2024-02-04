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

// api/users?id=${_id}
export const getUser = async (req, res, next) => {
  const payload_id = req.payload.id; // id des eingeloggten users

  const { id } = req.query;

  console.log({ payload_id });
  try {
    const user = await User.findById(id).lean().select({
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
    });
    // console.log({ user });

    if (user) {
      const followers = user.followers.map((follower) => follower.toJSON());
      const followStatus = followers.includes(payload_id) ? true : false;
      console.log({ followStatus });
      console.log({ followers });

      res.json({ user, followStatus: followStatus });
    }
  } catch (err) {
    next(err);
  }
};

export const getLoginUserData = async (req, res, next) => {
  const user_id = req.payload.id;

  try {
    const user = await User.findById(user_id)
      .select({
        password: 0,
        salt: 0,
        createdAt: 0,
        updatedAt: 0,
        __v: 0,
      })
      .exec();

    if (!user) return next(createError(404, 'User not found'));
    console.log(user);
    res.json(user);
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
