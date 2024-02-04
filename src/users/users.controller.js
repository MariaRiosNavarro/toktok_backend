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

// /api/users/follow?id=${_id}
export const updateFollowStatus = async (req, res, next) => {
  const loginUser_id = req.payload.id;
  // const loginUser_id = '65ba1e3bf62d099c7f3c0423';

  const otherUser_id = req.query.id;

  try {
    const loginUser = await User.findById(loginUser_id).exec();
    console.log(
      'loginUser --',
      loginUser._id,
      loginUser.username,
      ' -- number of following before - ',
      loginUser.following.length
    );

    const otherUser = await User.findById(otherUser_id).exec();

    console.log(
      'otherUser --',
      otherUser._id,
      otherUser.username,
      ' -- number of followers before - ',
      otherUser.followers.length
    );

    if (loginUser.following.includes(otherUser_id)) {
      console.log(
        'Does loginUser currently follow otherUser? -- Y E S --> unfollow!'
      );

      loginUser.following.pull(otherUser_id);
      otherUser.followers.pull(loginUser_id);

      await Promise.all([loginUser.save(), otherUser.save()]);

      console.log(
        'loginUser number of following after - ',
        loginUser.following.length
      );
      console.log(
        'otherUser number of followers after - ',
        otherUser.followers.length
      );

      res.status(200).json({
        success: true,
        message: `loginUser '${loginUser.username}' unfollowed otherUser '${otherUser.username}'`,
      });
    } else if (!loginUser.following.includes(otherUser_id)) {
      console.log(
        'Does loginUser currently follow otherUser? -- N O --> follow!'
      );

      loginUser.following.push(otherUser_id);
      otherUser.followers.push(loginUser_id);

      await Promise.all([loginUser.save(), otherUser.save()]);

      console.log(
        'loginUser number of following after - ',
        loginUser.following.length
      );
      console.log(
        'otherUser number of followers after - ',
        otherUser.followers.length
      );

      res.status(200).json({
        success: true,
        message: `loginUser '${loginUser.username}' followed otherUser '${otherUser.username}'`,
      });
    }
  } catch (err) {
    next(err);
  }
};
