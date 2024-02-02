import { useEffect, useState } from "react";
import NavBarBottom from "../components/Global/NavBarBottom";
import PostDetail from "../components/Global/PostDetail";
import NavBarTop from "../components/Global/NavBarTop";
import TockTockLogoSvg from "../components/SVG/TockTockLogoSvg";
import HearthSvg from "../components/SVG/HearthSvg";

const Home = () => {
  const [posts, setPosts] = useState();
  useEffect(() => {
    async function getPosts() {
      const response = await fetch(
        import.meta.env.VITE_BACKEND_URL + "/api/posts/"
      );
      console.log("Aus Home", import.meta.env.VITE_BACKEND_URL + "/api/posts/");
      if (response.ok) {
        const data = await response.json();
        setPosts(data);
        console.log(data);
      }
    }
    getPosts();
  }, []);

  if (!posts) return <h1>Loading.....</h1>;
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
          {posts.map((post, key) => {
            <PostDetail post={post} key={key} />;
          })}
          {/* <PostDetail />
          <PostDetail />
          <PostDetail /> */}
        </section>
      </main>
      <NavBarBottom
        item={{ home: true, search: false, profile: false, add: false }}
      />
    </>
  );
};

export default Home;
