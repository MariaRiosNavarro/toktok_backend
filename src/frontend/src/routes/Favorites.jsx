import { useEffect, useState } from "react";
import NavBarBottom from "../components/Global/NavBarBottom";
import PostDetail from "../components/Global/PostDetail";
import NavBarTop from "../components/Global/NavBarTop";
import TockTockLogoSvg from "../components/SVG/TockTockLogoSvg";
import HearthSvg from "../components/SVG/HearthSvg";
import LoadingSpin from "../components/SVG/LoadingSpin";
import { useNavigate } from "react-router-dom";

const Favorites = () => {
  const [favorites, setFavorites] = useState(null);
  const [favoritesMessage, setFavoritesMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    getFavorites();
  }, []);

  async function getFavorites() {
    setLoading(true);

    const response = await fetch(
      import.meta.env.VITE_BACKEND_URL + "/api/posts/favorites",
      {
        method: "GET",
        credentials: "include",
      }
    );
    if (response.status === 202) {
      setLoading(false);
      setFavoritesMessage(
        "You don't have any favorites yet; please like some posts first"
      );
      setTimeout(() => {
        navigate("/");
      }, 3000);
      return;
    }
    if (response.ok) {
      setLoading(false);
      let data = await response.json();
      let favoritesJson = data;
      const sortedFavorites = [...favoritesJson].sort(
        (a, b) => new Date(b.post.createdAt) - new Date(a.post.createdAt)
      );
      setFavorites(sortedFavorites);
    }
  }
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
        {loading ? (
          <LoadingSpin />
        ) : (
          <div>
            {favoritesMessage ? (
              <section className="h-[70vh] flex justify-center items-center">
                <p className="p-8 bg-primary rounded-3xl tracking-wider text-bold text-base-100">
                  {favoritesMessage}
                </p>
              </section>
            ) : (
              <section>
                {favorites?.map((post, key) => {
                  return (
                    <PostDetail
                      post={post.post}
                      user={post.postUserData}
                      key={key}
                      reloadFavorite={true}
                    />
                  );
                })}
              </section>
            )}
          </div>
        )}
      </main>
      <NavBarBottom
        item={{ home: false, search: false, profile: false, add: false }}
      />
    </>
  );
};

export default Favorites;
