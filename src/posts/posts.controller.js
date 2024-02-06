import { User } from '../users/users.model.js';
import { Post } from './posts.model.js';
import { deleteImage, uploadImage } from '../config/storage.config.js';
import { getFavoriteStatus, getPostUserData } from '../users/users.service.js';

export const createPost = async (req, res, next) => {
  const newPost = new Post(req.body);
  const payloadId = req.payload.id;

  try {
    const cloudinaryResult = await uploadImage(req.file.buffer);
    newPost.user = payloadId;
    newPost.img = cloudinaryResult.secure_url;
    newPost.cloudinaryId = cloudinaryResult.public_id;
    const savedPost = await newPost.save();
    if (!savedPost) {
      res.status(400).json({ message: 'Post not saved! Try again.' });
    }

    // * Funktion um den Post direkt in den User zu pushen
    const user = await User.findById(newPost.user)
      .select({
        _id: 1,
        username: 1,
        img: 1,
        job: 1,
      })
      .exec();
    // ? müssen wir hier noch die daten von dem user mitschicken im response???
    if (!user) {
      return res.status(404).json({ message: 'User not found!' });
    }

    user.posts.push(savedPost._id);
    await user.save();
    res.status(201).json({
      message: 'Post sucessfully created!',
      postId: savedPost._id,
      user: user,
    });
  } catch (err) {
    next(err);
  }
};

export const updatePost = async (req, res, next) => {
  const postId = req.params.id;
  const updatedPost = req.body;

  try {
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: 'Post not found!' });
    }
    if (req.file) {
      const cloudinaryResult = await uploadImage(req.file.buffer);
      updatedPost.img = cloudinaryResult.secure_url;
      updatedPost.cloudinaryId = cloudinaryResult.public_id;
      deleteImage(post.cloudinaryId);
    }
    const savedPost = await Post.findByIdAndUpdate(postId, {
      $set: updatedPost,
      new: true,
    });
    res
      .status(200)
      .json({ message: 'Post sucessfully updated!', post: savedPost });
  } catch (err) {
    next(err);
  }
};

export const deletePost = async (req, res, next) => {
  const postId = req.params.id;
  try {
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: 'Post not found!' });
    }

    const user = await User.findById(post.user);
    if (!user) {
      return res.status(404).json({ message: 'User not found!' });
    }
    await deleteImage(post.cloudinaryId);
    user.posts = user.posts.filter(
      (userPostId) => userPostId.toString() !== postId
    );

    await user.save();

    await Post.findByIdAndDelete(postId);

    res.status(200).json({ message: 'Post successfully deleted!' });
  } catch (err) {
    next(err);
  }
};

export const getPost = async (req, res, next) => {
  const payload_id = req.payload.id; // id des eingeloggten users
  const postId = req.params.id;
  try {
    const post = await Post.findById(postId).populate('comments').lean();
    // das .lean() ist wichtig weil man sonst keine object methods anwenden kann!
    console.log({ post });

    if (post) {
      const favoriteStatus = getFavoriteStatus(post, payload_id);
      const postUserData = await getPostUserData(User, post.user);
      res.json({
        success: true,
        post,
        favoriteStatus: favoriteStatus,
        postUserData: postUserData,
      });
    } else {
      res.status(404).json({ success: false, message: 'Post not found.' });
    }
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export const getPosts = async (req, res, next) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (err) {
    next(err);
  }
};

//$ updateFavoriteStatus --- posts liken und unliken ------------------------------

// /api/posts/like?id=${_id}
export const updateFavoriteStatus = async (req, res, next) => {
  const loginUser_id = req.payload.id;
  const post_id = req.query.id;

  try {
    const loginUser = await User.findById(loginUser_id).exec();
    console.log(
      'loginUser --',
      loginUser._id,
      loginUser.username,
      ' -- number of favorites before - ',
      loginUser.favorites.length
    );

    const post = await Post.findById(post_id).exec();

    console.log(
      'post --',
      post._id,
      ' -- number of likes before - ',
      post.likes.length
    );

    if (loginUser.favorites.includes(post_id)) {
      console.log(
        'Does loginUser currently like this post? -- Y E S --> unlike!'
      );

      loginUser.favorites.pull(post_id);
      post.likes.pull(loginUser_id);

      await Promise.all([loginUser.save(), post.save()]);

      console.log(
        'loginUser number of favorites after - ',
        loginUser.favorites.length
      );
      console.log('post number of likes after - ', post.likes.length);

      res.status(200).json({
        success: true,
        message: `loginUser '${loginUser.username}' unliked post '${post.description}'`,
      });
    } else if (!loginUser.favorites.includes(post_id)) {
      console.log('Does loginUser currently like this post? -- N O --> like!');

      loginUser.favorites.push(post_id);
      post.likes.push(loginUser_id);

      await Promise.all([loginUser.save(), post.save()]);

      console.log(
        'loginUser number of favorites after - ',
        loginUser.favorites.length
      );
      console.log('post number of likes after - ', post.likes.length);

      res.status(200).json({
        success: true,
        message: `loginUser '${loginUser.username}' liked post '${post.description}'`,
      });
    }
  } catch (err) {
    console.log({ err });
    next(err);
  }
};
