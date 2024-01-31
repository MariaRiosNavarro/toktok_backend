import NavBarTop from "../../components/Global/NavBarTop";
import NewPostSvg from "../../components/SVG/NewPostSvg";

const NewPost = () => {
  return (
    <>
      <h2>NewPost</h2>
      <NavBarTop
        leftSvgComponent={<NewPostSvg />}
        leftLink="/"
        leftText="New Post"
        rightSvgComponent=""
      />
      <section>
        <article></article>
      </section>
    </>
  );
};

export default NewPost;
