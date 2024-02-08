import { useEffect, useState } from "react";
import NavBarBottom from "../components/Global/NavBarBottom";
import PostDetail from "../components/Global/PostDetail";
import NavBarTop from "../components/Global/NavBarTop";
import TockTockLogoSvg from "../components/SVG/TockTockLogoSvg";
import HearthSvg from "../components/SVG/HearthSvg";
import LoadingSpin from "../components/SVG/LoadingSpin";

const Favorites = () => {
  const [favorites, setFavorites] = useState(null);

  useEffect(() => {
    async function getFavorites() {
      const response = await fetch(
        import.meta.env.VITE_BACKEND_URL + "/api/posts/favorites",
        {
          method: "GET",
          credentials: "include",
        }
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        let favoritesJson = data;
        const sortedFavorites = [...favoritesJson].sort(
          (a, b) => new Date(b.post.createdAt) - new Date(a.post.createdAt)
        );
        console.log("NEUER DATA RESPONSE VOM BACKEND-post: ", sortedFavorites);
        setFavorites(sortedFavorites);
      }
    }
    getFavorites();
  }, []);

  return (
    <>
      <NavBarTop
        leftSvgComponent={<TockTockLogoSvg />}
        leftLink="/"
        leftText="Tok Tok"
        rightSvgComponent={<HearthSvg selected={true} />}
        rightLink="/"
      />
      <main className="p-6 pb-12">
        {favorites ? (
          <section>
            {favorites?.map((post, key) => {
              return (
                <PostDetail
                  post={post.post}
                  user={post.postUserData}
                  key={key}
                />
              );
            })}
          </section>
        ) : (
          <section className="h-[70vh] flex justify-center items-center">
            You don´t have favorites
          </section>
        )}
      </main>
      <NavBarBottom
        item={{ home: false, search: false, profile: false, add: false }}
      />
    </>
  );
};

export default Favorites;
