import HearthSvg from "../SVG/HearthSvg";
import CommentsSvg from "../SVG/CommentsSvg";
import { useState } from "react";
const PostDetailsFooter = () => {
  const [isHeartSelected, setIsHeartSelected] = useState(false);
  const handleHeartClick = () => {
    setIsHeartSelected(!isHeartSelected);
  };
  return (
    <>
      <section className="w-7/12 flex gap-6 ml-3 mt-4">
        <button className=" flex gap-2 " onClick={handleHeartClick}>
          <HearthSvg selected={isHeartSelected} />
          <p>44.334</p>
        </button>
        <article className=" flex gap-2 ">
          <CommentsSvg />
          <p>26878</p>
        </article>
      </section>
    </>
  );
};

export default PostDetailsFooter;
