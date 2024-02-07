import { useEffect, useState } from "react";
import NavBarBottom from "../components/Global/NavBarBottom";
import PostDetail from "../components/Global/PostDetail";
import NavBarTop from "../components/Global/NavBarTop";
import TockTockLogoSvg from "../components/SVG/TockTockLogoSvg";
import HearthSvg from "../components/SVG/HearthSvg";
import LoadingSpin from "../components/SVG/LoadingSpin";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState();
  const [newUserFollows, setNewUserFollows] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    async function getPosts() {
      const response = await fetch(
        import.meta.env.VITE_BACKEND_URL + "/api/posts/",
        {
          method: "GET",

          credentials: "include",
        }
      );
      if (response.ok) {
        setLoading(false);
        let data = await response.json();
        data = data.detailedPosts;
        console.log("NEUER DATA RESPONSE VOM BACKEND-post: ", data);
        const sortedPosts = [...data].sort(
          (a, b) => new Date(b.post.createdAt) - new Date(a.post.createdAt)
        );
        setPosts(sortedPosts);
      }
      // (response.status === 202)
      if (response.status === 404) {
        setLoading(false);
        setNewUserFollows("Please first follow some users");
        setTimeout(() => {
          navigate("/search");
        }, 4000);
      }
    }
    getPosts();
  }, []);

  return (
    <>
      <NavBarTop
        leftSvgComponent={<TockTockLogoSvg />}
        leftLink="/"
        leftText="Tok Tok"
        rightSvgComponent={<HearthSvg selected={false} />}
        rightLink="/favorites"
      />
      <main className="p-6 pb-12">
        {loading ? (
          <LoadingSpin />
        ) : (
          <section>
            {newUserFollows ? (
              <section className="h-[70vw] flex justify-center items-center">
                <p>{newUserFollows}</p>
              </section>
            ) : (
              <section>
                {posts?.map((post, key) => {
                  return (
                    <PostDetail
                      post={post.post}
                      user={post.postUserData}
                      key={key}
                    />
                  );
                })}
              </section>
            )}
          </section>
        )}
      </main>
      <NavBarBottom
        item={{ home: true, search: false, profile: false, add: false }}
      />
    </>
  );
};

export default Home;
