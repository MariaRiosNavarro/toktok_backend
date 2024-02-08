// check if user likes post
// post -> post document aus der db
// user -> login user id
export const getFavoriteStatus = (post, user) => {
  const likes = post.likes.map((like) => like.toJSON());
  const favoriteStatus = likes.includes(user) ? true : false;

  return favoriteStatus;
};

// check if login-user follows user
// user = user document
// loginUser = id
export const getFollowerStatus = (user, loginUser) => {
  const followers = user.followers.map((follower) => follower.toJSON());
  const followStatus = followers.includes(loginUser) ? true : false;

  return followStatus;
};

export const getPostUserData = async (User, postUser) => {
  try {
    const user = await User.findById(postUser)
      .select({
        _id: 1,
        username: 1,
        img: 1,
        job: 1,
      })
      .exec();

    return user;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const getCommentUserData = async (User, commentUser) => {
  try {
    const user = await User.findById(commentUser)
      .select({
        _id: 1,
        username: 1,
        img: 1,
        job: 1,
      })
      .exec();
    // console.log({ user });
    return user;
  } catch (error) {
    console.error(error);
    return error;
  }
}

export const getReplyUserData = async (User, replyUser) => {
  try {
    const user = await User.findById(replyUser)
    .select({
      _id: 1,
      username: 1,
      img: 1,
      job: 1,
    })
    .exec();
        // console.log({ user });
    return user;
  } catch (error) {
    console.error(error);
    return error;
  }
};