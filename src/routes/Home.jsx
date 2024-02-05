import { useEffect, useState } from "react";
import NavBarBottom from "../components/Global/NavBarBottom";
import PostDetail from "../components/Global/PostDetail";
import NavBarTop from "../components/Global/NavBarTop";
import TockTockLogoSvg from "../components/SVG/TockTockLogoSvg";
import HearthSvg from "../components/SVG/HearthSvg";
import LoadingScreen from "./LoadingScreen";

const Home = () => {
  const [posts, setPosts] = useState();
  useEffect(() => {
    async function getPosts() {
      const response = await fetch(
        import.meta.env.VITE_BACKEND_URL + "/api/posts/"
      );
      if (response.ok) {
        const data = await response.json();

        const sortedPosts = [...data].sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setPosts(sortedPosts);
        console.log(data);
      }
    }
    getPosts();
  }, []);

  if (!posts) return <LoadingScreen />;
  return (
    <>
      <NavBarTop
        leftSvgComponent={<TockTockLogoSvg />}
        leftLink="/"
        leftText="Tok Tok"
        rightSvgComponent={<HearthSvg selected={false} />}
        rightLink="/"
      />
      <main className="p-6 pb-12">
        <section>
          {posts?.map((post, key) => {
            return <PostDetail post={post} key={key} />;
          })}
        </section>
      </main>
      <NavBarBottom
        item={{ home: true, search: false, profile: false, add: false }}
      />
    </>
  );
};

export default Home;
