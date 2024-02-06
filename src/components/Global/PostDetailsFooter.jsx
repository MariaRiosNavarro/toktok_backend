import HearthSvg from "../SVG/HearthSvg";
import CommentsSvg from "../SVG/CommentsSvg";
import { useRef, useState } from "react";
import { useTheme } from "../../context/userContext";
import WriteComment from "../Post/WriteComment";
import { useUserContext } from "../../context/loginContext";
const PostDetailsFooter = ({ post, reply, commentId }) => {
  const [isHeartSelected, setIsHeartSelected] = useState(false);
  const [replyComment, setReplyComment] = useState(false);
  const { theme } = useTheme();
  const { loginUser } = useUserContext();
  const commentRef = useRef();
  // const [likes, setLikes] = useState(post.likes.length);
  let commonStyles = "rounded-xl px-[20px] p-3 mx-4 ";
  const darkStyles = "bg-[#9E9E9E] placeholder:text-gray-500 text-gray-700";
  const lightStyles = "bg-[#FAFAFA]";
  const inputClassNames = `${commonStyles} ${
    theme === "dark" ? darkStyles : lightStyles
  }`;

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
  async function saveReplyComment() {
    const comment = commentRef.current.value;
    try {
      const response = await fetch(
        import.meta.env.VITE_BACKEND_URL +
          "/api/comments/" +
          commentId +
          "/commit",
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user: loginUser._id,
            parentComment: commentId,
            text: comment,
          }),
        }
      );
      if (response.ok) {
        console.log("___________ comment => ", comment);
        // await setRefresh(!refresh);
        commentRef.current.value = "";
        //setComment("");
      } else {
        // Handle error
        console.error("Failed to save comment");
      }
    } catch (error) {
      console.error("Error saving comment:", error);
    }
  }
  const handleReplyClick = async () => {
    console.log("handleReplyClick");
    setReplyComment(!replyComment);
  };

  return (
    <>
      <section className="w-full flex flex-col gap-6 items-center ml-3 mt-4">
        <section className="w-full flex gap-6 items-center">
          <button className=" flex gap-2 " onClick={handleHeartClick}>
            <HearthSvg selected={isHeartSelected} />
            <p>{post?.likes.length}</p>
          </button>
          {reply ? (
            <div>
              <button onClick={handleReplyClick}>Reply</button>
            </div>
          ) : (
            <article className=" flex gap-2 ">
              <CommentsSvg />
              <p>{post?.comments.length}</p>
            </article>
          )}
        </section>

        {replyComment && (
          <section className="flex items-center">
            <div className="avatar">
              <div className="w-12 rounded-full">
                <img
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  alt=""
                />
              </div>
            </div>
            <textarea
              name="comment"
              placeholder="your Comment..."
              className={inputClassNames}
              ref={commentRef}
              rows="1"
            />

            <button
              className="btn btn-circle text-primary"
              onClick={saveReplyComment}
            >
              Post
            </button>
          </section>
        )}
      </section>
    </>
  );
};

export default PostDetailsFooter;
