import NavBarBottom from "../components/Global/NavBarBottom";
import PostDetail from "../components/Global/PostDetail";
import NavBarTop from "../components/Global/NavBarTop";
import BackArrowSvg from "../components/SVG/BackArrowSvg";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import PostUserHeader from "../components/Global/PostUserHeader";
import PostDetailsFooter from "../components/Global/PostDetailsFooter";
const Post = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    async function getPost() {
      const response = await fetch(
        import.meta.env.VITE_BACKEND_URL + "/api/posts/" + slug
      );
      if (response.ok) {
        setPost(await response.json());
      }
    }
    getPost();
  }, []);

  if (!post) return <h1>Loading.....</h1>;

  return (
    <>
      <NavBarTop
        leftSvgComponent={<BackArrowSvg />}
        leftLink="/"
        leftText=""
        rightSvgComponent=""
        rightLink="/"
      />
      <main className="p-6 pb-20">
        <section className="w-full  mb-6">
          <PostUserHeader slug={slug} />
          <section>
            <section className="mt-4 w-full">
              <div className="avatar ">
                <div className=" rounded-[32px] ">
                  <img src={post.img} />
                </div>
              </div>
            </section>
          </section>
          <section className="mt-4 mx-3 ">
            <p>{post.description}</p>
          </section>
          <PostDetailsFooter post={post} />
        </section>
      </main>
      <NavBarBottom
        item={{ home: false, search: false, profile: false, add: false }}
      />
    </>
  );
};

export default Post;
