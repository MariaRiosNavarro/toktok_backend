import Button from "../components/Global/Button";
import NavBarBottom from "../components/Global/NavBarBottom";
import PostDetail from "../components/Global/PostDetail";

const Home = () => {
  return (
    <>
      <section>
        <NavBarBottom
          item={{ home: true, search: false, profile: false, add: false }}
        />
      </section>
    </>
  );
};

export default Home;
