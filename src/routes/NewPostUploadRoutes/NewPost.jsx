import NavBarTop from "../../components/Global/NavBarTop";
import TockTockLogoSvg from "../../components/SVG/TockTockLogoSvg";
import HearthSvg from "../../components/SVG/HearthSvg";
// import { useNavigate } from "react-router-dom";
const NewPost = () => {
  // const navigate = useNavigate();
  // const seeFavorites = () => {
  //   navigate("/");
  // };

  return (
    <>
      <h2>NewPost</h2>
      <NavBarTop
        leftSvgComponent={<TockTockLogoSvg />}
        leftLink="/"
        leftText="Tok Tok"
        rightSvgComponent={<HearthSvg selected={false} />}
        rightLink="/" // NICE TO HAVE -> change to "/favorites" -> list all Favorites Post
      />
      <section>
        <article></article>
      </section>
    </>
  );
};

export default NewPost;
