import { User } from "../users/users.model.js";
import { Post } from "./posts.model.js";
import { deleteImage, uploadImage } from "../config/storage.config.js";
import {
  getFavoriteStatus,
  getPostUserData,
  getCommentUserData,
  getReplyUserData,
} from "../users/users.service.js";
import { Comment, CommentReply } from "../comments/comments.model.js";

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
      res.status(400).json({ message: "Post not saved! Try again." });
    }

    // * Funktion um den Post direkt in den User zu pushen
    const user = await User.findById(payloadId)
      .select({
        _id: 1,
        username: 1,
        img: 1,
        job: 1,
        posts: 1,
      })
      .exec();

    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }

    try {
      user.posts.push(savedPost._id);
      await user.save();
    } catch (err) {
      return res.status(500).json({ message: "Failed to add post to user." });
    }

    await user.save();
    res.status(201).json({
      message: "Post sucessfully created!",
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
      return res.status(404).json({ message: "Post not found!" });
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
      .json({ message: "Post sucessfully updated!", post: savedPost });
  } catch (err) {
    next(err);
  }
};

export const deletePost = async (req, res, next) => {
  const postId = req.params.id;
  try {
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found!" });
    }

    const user = await User.findById(post.user);
    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }
    await deleteImage(post.cloudinaryId);
    user.posts = user.posts.filter(
      (userPostId) => userPostId.toString() !== postId
    );

    await user.save();

    await Post.findByIdAndDelete(postId);

    res.status(200).json({ message: "Post successfully deleted!" });
  } catch (err) {
    next(err);
  }
};

export const getPost = async (req, res, next) => {
  const payload_id = req.payload.id; // id des eingeloggten users
  const postId = req.params.id;
  try {
    const loginUser = await User.findById(payload_id);
    // console.log({ loginUser });
    if (!loginUser) {
      return res.status(404).json({ message: "User not found!" });
    }

    const post = await Post.findById(postId).lean();
    // das .lean() ist wichtig weil man sonst keine object methods anwenden kann!
    // console.log({ post });

    if (post) {
      const commentIds = post.comments.map((comment) => comment._id.toJSON());
      const comments = await Comment.find({ _id: { $in: commentIds } }).lean();
      let replies = [];

      if (comments) {
        const replyIds = comments.flatMap((comment) =>
          comment.replies.map((reply) => reply._id.toJSON())
        );
        replies = await CommentReply.find({ _id: { $in: replyIds } }).lean();
      }

      const getDetailedPost = async (
        post,
        comments,
        replies,
        postUserData,
        userId
      ) => {
        const commentsPromises = comments.map(async (comment) => {
          const commentUserData = await getCommentUserData(User, comment.user);
          const favoriteStatus = getFavoriteStatus(post, payload_id);
          const replyUserDataPromises = comment.replies.map(async (reply) => {
            const replyUserData = await getReplyUserData(User, reply.user);
            return replyUserData;
          });
          const replyUserData = await Promise.all(replyUserDataPromises);
          return {
            ...comment,
            commentUserData,
            replies: comment.replies.map((reply, index) => ({
              ...reply,
              replyUserData: replyUserData[index],
            })),
          };
        });
        const resolve = await Promise.all(commentsPromises);
        return { ...post, postUserData, comments: resolve, replies };
      };

      const postUserData = await getPostUserData(User, post.user);
      const detailedPost = await getDetailedPost(
        post,
        comments,
        replies,
        postUserData,
        payload_id
      );
      res.json({
        success: true,
        detailedPost,
      });
    } else {
      res.status(404).json({ success: false, message: "Post not found." });
    }
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export const getPosts = async (req, res, next) => {
  const payload_id = req.payload.id;

  try {
    const loginUser = await User.findById(payload_id);
    console.log({ loginUser });
    if (!loginUser) {
      return res.status(404).json({ message: "User not found!" });
    }

    if (loginUser) {
      const followingIds = loginUser.following.map((entry) => entry.toJSON());
      console.log({ followingIds });
      if (!followingIds || followingIds.length === 0) {
        return res
          .status(202)
          .json({ message: "Please follow someone to see posts!" });
      }

      const posts = await Post.find({ user: { $in: followingIds } }).lean();
      console.log("following ids in posts", followingIds);
      console.log("ein example post:", posts[2]);

      if (!posts || posts.length === 0) {
        return res
          .status(202)
          .json({ message: "People you followed havent any Posts yets!" });
      }

      const getDetailedPosts = async (posts, userId) => {
        const postsPromises = posts.map(async (post) => {
          const postUserData = await getPostUserData(User, post.user);
          const favoriteStatus = getFavoriteStatus(post, userId);
          return { post, postUserData, favoriteStatus };
        });

        const resolve = await Promise.all(postsPromises);
        return resolve;
      };

      const detailedPosts = await getDetailedPosts(posts, payload_id);

      console.log({ detailedPosts });

      res.status(200).json({ success: true, detailedPosts });
    }
  } catch (err) {
    console.error(err);
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
      "loginUser --",
      loginUser._id,
      loginUser.username,
      " -- number of favorites before - ",
      loginUser.favorites.length
    );

    const post = await Post.findById(post_id).exec();

    console.log(
      "post --",
      post._id,
      " -- number of likes before - ",
      post.likes.length
    );

    if (loginUser.favorites.includes(post_id)) {
      console.log(
        "Does loginUser currently like this post? -- Y E S --> unlike!"
      );

      loginUser.favorites.pull(post_id);
      post.likes.pull(loginUser_id);

      await Promise.all([loginUser.save(), post.save()]);

      console.log(
        "loginUser number of favorites after - ",
        loginUser.favorites.length
      );
      console.log("post number of likes after - ", post.likes.length);

      res.status(200).json({
        success: true,
        message: `loginUser '${loginUser.username}' unliked post '${post.description}'`,
      });
    } else if (!loginUser.favorites.includes(post_id)) {
      console.log("Does loginUser currently like this post? -- N O --> like!");

      loginUser.favorites.push(post_id);
      post.likes.push(loginUser_id);

      await Promise.all([loginUser.save(), post.save()]);

      console.log(
        "loginUser number of favorites after - ",
        loginUser.favorites.length
      );
      console.log("post number of likes after - ", post.likes.length);

      res.status(200).json({
        success: true,
        message: `loginUser '${loginUser.username}' liked post '${post.description}'`,
      });
    }
  } catch (err) {
    console.log("error von updateFavoriteStatus: ", err);
    next(err);
  }
};

//$ getUserFavorites --- favorite posts des login users ------------------------------

export const getUserFavorites = async (req, res, next) => {
  const { id } = req.payload;
  try {
    const user = await User.findById(id).lean().select({
      _id: 1,
      favorites: 1,
    });

    if (user && user.favorites && user.favorites.length > 0) {
      try {
        const posts = await Post.find({ _id: { $in: user.favorites } });
        if (posts) {
          const postsWithUserDataPromises = posts.map(async (post) => {
            const postUserData = await getPostUserData(User, post.user);
            return { post, postUserData };
          });

          const postsWithUserData = await Promise.all(
            postsWithUserDataPromises
          );
          res.json(postsWithUserData);
        }
      } catch (error) {
        console.error("posts error", error);
      }
    } else if (user.favorites.length === 0) {
      res.status(202).json({
        success: true,
        message: "This User has no favorite posts",
      });
    }
    res.end();
  } catch (err) {
    console.error(err);
    next(err);
  }
};
