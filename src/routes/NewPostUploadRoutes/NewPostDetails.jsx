import BackArrowSvg from "../../components/SVG/BackArrowSvg";
import NavBarTop from "../../components/Global/NavBarTop";

const NewPostDetails = () => {
  return (
    <>
      <h2>NewPostDetails</h2>
      <NavBarTop
        leftSvgComponent={<BackArrowSvg />}
        leftLink="/upload"
        leftText="New Post"
        rightSvgComponent=""
      />
      <section>
        <article></article>
      </section>
    </>
  );
};

export default NewPostDetails;
