import { Link, useParams } from "react-router-dom";

import { useState } from "react";
import PostUserHeader from "./PostUserHeader";
import PostDetailsFooter from "./PostDetailsFooter";
const PostDetail = () => {
  const { slug } = useParams();

  return (
    <>
      <section className="w-full  mb-6">
        <PostUserHeader slug={slug} />
        <Link to={"/post/" + slug}>
          <section className="mt-4 w-full">
            <div className="avatar ">
              <div className=" rounded-[32px] ">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
          </section>
        </Link>
        <PostDetailsFooter />
        {/* <section className="w-7/12 flex gap-6 ml-3 mt-4">
          <button className=" flex gap-2 " onClick={handleHeartClick}>
            <HearthSvg selected={isHeartSelected} />
            <p>44.334</p>
          </button>
          <article className=" flex gap-2 ">
            <CommentsSvg />
            <p>26878</p>
          </article>
        </section> */}
      </section>
    </>
  );
};

export default PostDetail;
