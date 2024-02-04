import { useState, useEffect, useRef } from "react";
import { useTheme } from "../../context/userContext";
import { useUserContext } from "../../context/userContext";
const WriteComment = ({ id }) => {
  const { theme } = useTheme();
  const [comment, setComment] = useState();
  const [value, setValue] = useState("");
  const commentRef = useRef();
  const { loginUser } = useUserContext();

  let commonStyles =
    "rounded-xl px-[20px] p-4 h-6 focus:border-none focus:outline-none";
  const darkStyles = "bg-[#9E9E9E] placeholder:text-gray-500 text-gray-700";
  const lightStyles = "bg-[#FAFAFA]";
  const inputClassNames = `${commonStyles} ${
    theme === "dark" ? darkStyles : lightStyles
  }`;
  useEffect(() => {
    if (commentRef.current) {
      commentRef.current.style.height = "auto";
      const scrollHeight = commentRef.current.scrollHeight;
      commentRef.current.style.height = scrollHeight + "px";
    }
  }, [value]);

  async function saveComment() {
    const comment = commentRef.current.value;
    try {
      const response = await fetch(
        import.meta.env.VITE_BACKEND_URL + "/api/posts/" + id + "/commit",
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user: loginUser._id,
            post: id,
            text: comment,
          }),
        }
      );
      if (response.ok) {
      } else {
        // Handle error
        console.error("Failed to save comment");
      }
    } catch (error) {
      console.error("Error saving comment:", error);
    }
  }
  const handleChange = (event) => {
    const val = event.target?.value;
    setValue(val);
  };

  return (
    <>
      <section className="flex items-center">
        <div className="avatar">
          <div className="w-14 rounded-full">
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
          onChange={handleChange}
          value={value}
          ref={commentRef}
        />

        <button className="btn btn-circle text-primary" onClick={saveComment}>
          Post
        </button>
      </section>
    </>
  );
};

export default WriteComment;
