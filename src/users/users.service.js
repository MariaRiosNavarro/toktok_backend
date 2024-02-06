// check if user likes post
// post -> post document aus der db
// user -> login user id

export const getFavoriteStatus = (post, user) => {
  const likes = post.likes.map((like) => like.toJSON());
  const favoriteStatus = likes.includes(user) ? true : false;
  console.log({ favoriteStatus });

  return favoriteStatus;
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
    console.log({ user });
    return user;
  } catch (error) {
    console.error(error);
    return error;
  }
};
