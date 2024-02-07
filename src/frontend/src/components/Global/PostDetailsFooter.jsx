import HearthSvg from "../SVG/HearthSvg";
import CommentsSvg from "../SVG/CommentsSvg";
import { useRef, useState } from "react";
import { useTheme } from "../../context/userContext";
import WriteComment from "../Post/WriteComment";
import { useUserContext } from "../../context/loginContext";
import TimeDifferent from "./TimeDifferent";
import { useEffect } from "react";

const PostDetailsFooter = ({
  post,
  reply,
  commentId,
  date,
  refresh,
  setRefresh,
}) => {
  const [isHeartSelected, setIsHeartSelected] = useState(false);
  const [replyComment, setReplyComment] = useState(false);
  const { theme } = useTheme();
  const { loginUser } = useUserContext();
  const commentRef = useRef();
  const [likesNumber, setLikesNumber] = useState(0);

  // -----------------------------------------------------------------------------STYLE
  let commonStyles = "rounded-xl  p-2 mx-4 ";
  const darkStyles = "bg-[#9E9E9E] placeholder:text-gray-500 text-gray-700";
  const lightStyles = "bg-[#FAFAFA]";
  const inputClassNames = `${commonStyles} ${
    theme === "dark" ? darkStyles : lightStyles
  }`;

  // -----------------------------------------------------------------------------USE EFFECT
  useEffect(() => {
    //Prüfen, ob die Benutzer-ID im Array von post.likes enthalten ist
    // um den herz rot zu seigen wenn gelike ist
    if (post?.likes && post.likes.includes(loginUser._id)) {
      setIsHeartSelected(true);
    }

    if (post?.likes) {
      setLikesNumber(post.likes.length);
    }
  }, [post?.likes, loginUser._id, refresh]);

  // -----------------------------------------------------------------------------LIKES
  const handleHeartClick = async () => {
    const newHeartSelection = !isHeartSelected;
    setIsHeartSelected(!isHeartSelected);

    const post_id = post?._id;

    const response = await fetch(
      import.meta.env.VITE_BACKEND_URL + "/api/posts/like?id=" + post_id,
      {
        method: "PATCH",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      console.log("Favorite status updated successfully");
      console.log(response);
      setLikesNumber(newHeartSelection ? likesNumber + 1 : likesNumber - 1);
    } else {
      console.error("Failed to update favorite status");
      setIsHeartSelected(!isHeartSelected); // Revert back the heart selection if update fails
    }
  };

  //
  // -----------------------------------------------------------------------------REPLY COMMENTS
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
        await setRefresh(!refresh);
        commentRef.current.value = "";
      } else {
        // Handle error
        console.error("Failed to save comment");
      }
    } catch (error) {
      console.error("Error saving comment:", error);
    }
  }

  // -----------------------------------------------------------------------------handleReplyClick

  const handleReplyClick = async () => {
    setReplyComment(!replyComment);
  };

  // -----------------------------------------------------------------------------RETURN
  return (
    <>
      <section className="w-full flex flex-col gap-6 items-center ml-3 mt-4">
        <section className="w-full flex gap-6 items-center">
          <button className=" flex gap-2 " onClick={handleHeartClick}>
            <HearthSvg selected={isHeartSelected} />
            <p>{likesNumber}</p>
          </button>
          {reply ? (
            <div className="flex gap-6">
              <button onClick={handleReplyClick}>Reply</button>
              <TimeDifferent date={date} />
            </div>
          ) : (
            <article className=" flex gap-2 ">
              <CommentsSvg />
              <p>{post?.comments?.length}</p>
            </article>
          )}
        </section>

        {replyComment && (
          <section className="flex items-center">
            <div className="avatar">
              <div className="w-8 rounded-full">
                <img
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  alt=""
                />
              </div>
            </div>
            <textarea
              name="comment"
              placeholder="your reply..."
              className={inputClassNames}
              ref={commentRef}
              rows="1"
            />

            <button
              className="btn btn-circle text-primary"
              onClick={saveReplyComment}
            >
              reply
            </button>
          </section>
        )}
      </section>
    </>
  );
};

export default PostDetailsFooter;
