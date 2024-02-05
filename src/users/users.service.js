// check if user likes post
// post -> post document aus der db
// user -> login user id

export const getFavoriteStatus = async (post, user) => {
  const likes = post.likes.map((like) => like.toJSON());
  const favoriteStatus = likes.includes(user) ? true : false;
  console.log({ favoriteStatus });

  return favoriteStatus;
};
