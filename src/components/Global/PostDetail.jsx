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
      </section>
    </>
  );
};

export default PostDetail;
