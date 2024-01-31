import NavBarBottom from "../components/Global/NavBarBottom";
import PostDetail from "../components/Global/PostDetail";
import NavBarTop from "../components/Global/NavBarTop";
import TockTockLogoSvg from "../components/SVG/TockTockLogoSvg";
import BackArrowSvg from "../components/SVG/BackArrowSvg";
import HearthSvg from "../components/SVG/HearthSvg";
import ThreePointsSvg from "../components/SVG/ThreePointsSvg";
import CommentsSvg from "../components/SVG/CommentsSvg";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import PostUserHeader from "../components/Global/PostUserHeader";
import PostDetailsFooter from "../components/Global/PostDetailsFooter";
const Post = (props) => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  // useEffect(() => {
  //   async function getPost() {
  //     const response = await fetch(
  //       import.meta.env.VITE_BACKEND_URL + "/api/posts/" + slug
  //     );
  //     if (response.ok) {
  //       setPost(await response.json());
  //     }
  //   }
  //   getPost();
  // }, []);

  // if (!post) return <h1>Loading.....</h1>

  return (
    <>
      <NavBarTop
        leftSvgComponent={<BackArrowSvg />}
        leftLink="/"
        leftText=""
        rightSvgComponent=""
        rightLink="/" // NICE TO HAVE -> change to "/favorites" -> list all Favorites Post
      />
      <main className="p-6 pb-20">
        <section className="w-full  mb-6">
          <PostUserHeader slug={slug} />
          <section>
            <section className="mt-4 w-full">
              <div className="avatar ">
                <div className=" rounded-[32px] ">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
            </section>
          </section>
          <section className="mt-4 mx-3 ">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium unde ipsa vero a dolorem velit deserunt error doloribus
              reiciendis ea! Assumenda, quae distinctio libero autem, amet, nemo
              nihil vero nobis est obcaecati delectus ?
            </p>
          </section>
          <PostDetailsFooter />
        </section>
      </main>
      <NavBarBottom
        item={{ home: false, search: false, profile: false, add: false }}
      />
    </>
  );
};

export default Post;
