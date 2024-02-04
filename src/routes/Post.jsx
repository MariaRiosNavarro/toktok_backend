import NavBarBottom from "../components/Global/NavBarBottom";
import PostDetail from "../components/Global/PostDetail";
import NavBarTop from "../components/Global/NavBarTop";
import BackArrowSvg from "../components/SVG/BackArrowSvg";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import PostUserHeader from "../components/Global/PostUserHeader";
import PostDetailsFooter from "../components/Global/PostDetailsFooter";
import Comments from "../components/Post/Comments";
import LineSvg from "../components/SVG/LineSvg";
import TimeDifferent from "../components/Global/TimeDifferent";
import WriteComment from "../components/Post/WriteComment";
import { useTheme } from "../context/userContext";
const Post = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { theme } = useTheme();
  const [refresh, setRefresh] = useState(false);

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
  }, [refresh]);

  const changeModal = () => {
    setIsModalOpen(!isModalOpen);
  };

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
            <TimeDifferent date={post.createdAt} />
          </section>
          <PostDetailsFooter post={post} />
          <div className="my-6 flex justify-center">
            <LineSvg />
          </div>
          {post.comments.length > 3 ? (
            <button onClick={changeModal} className="mb-3">
              view all {post.comments.length} comments
            </button>
          ) : (
            ""
          )}
          <Comments comments={post.comments} count={"3"} />
          <WriteComment
            id={post._id}
            refresh={refresh}
            setRefresh={setRefresh}
          />
        </section>
      </main>
      {isModalOpen && (
        <div
          className=" fixed inset-0  bg-gray-800 bg-opacity-50"
          onClick={changeModal}
        ></div>
      )}
      <div
        className={`[&>*]:mb-6 fixed  bottom-0 z-50   ${
          theme === "dark"
            ? "bg-slate-800 text-[#9E9E9E]"
            : "bg-white text-[#212121]"
        }  w-full p-6 pb-16 rounded-t-[40px] transform  ${
          isModalOpen
            ? "translate-y-0  transition-transform duration-300 ease-out"
            : "translate-y-full  transition-transform duration-300 ease-in"
        } overflow-y-auto h-[50%] max-h-[50%]`}
      >
        <section>
          <Comments comments={post.comments} count={"all"} />
        </section>
      </div>
      <NavBarBottom
        item={{ home: false, search: false, profile: false, add: false }}
      />
    </>
  );
};

export default Post;
