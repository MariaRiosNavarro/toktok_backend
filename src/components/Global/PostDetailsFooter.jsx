import HearthSvg from "../SVG/HearthSvg";
import CommentsSvg from "../SVG/CommentsSvg";
import { useState } from "react";
const PostDetailsFooter = ({ post, user }) => {
  const [isHeartSelected, setIsHeartSelected] = useState(false);
  // const [likes, setLikes] = useState(post.likes.length);

  const handleHeartClick = async () => {
    setIsHeartSelected(!isHeartSelected);
    // setLikes((prevLikes) => (isHeartSelected ? prevLikes - 1 : prevLikes + 1));

    // const response = await fetch(
    //   import.meta.env.VITE_BACKEND_URL + "/api/posts/editpost/" + post._id,
    //   {
    //     method: "PUT",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ likes }),
    //   }
    // );
    // if (response.ok) {
    //   console.log("Like wurde hinzugefügt");
    // }
  };
  return (
    <>
      <section className="w-7/12 flex gap-6 items-center ml-3 mt-4">
        <button className=" flex gap-2 " onClick={handleHeartClick}>
          <HearthSvg selected={isHeartSelected} />
          <p>{post?.likes.length}</p>
        </button>
        {user ? (
          <button>Reply</button>
        ) : (
          <article className=" flex gap-2 ">
            <CommentsSvg />
            <p>{post?.comments.length}</p>
          </article>
        )}
      </section>
    </>
  );
};

export default PostDetailsFooter;
