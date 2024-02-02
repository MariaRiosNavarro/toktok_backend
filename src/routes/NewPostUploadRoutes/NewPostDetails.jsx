import BackArrowSvg from "../../components/SVG/BackArrowSvg";
import NavBarTop from "../../components/Global/NavBarTop";
import NavBarBottom from "../../components/Global/NavBarBottom";
import NewPostCaption from "../../components/NewPostUpload/NewPostCaption";

const NewPostDetails = ({ selectedImage }) => {
  return (
    <>
      <NavBarTop
        leftSvgComponent={<BackArrowSvg />}
        leftLink="back"
        leftText="New Post"
        rightSvgComponent=""
      />
      <section className="p-6 pb-20">
        <NewPostCaption selectedImage={selectedImage} />
      </section>
      <NavBarBottom
        item={{ home: false, search: false, profile: false, add: true }}
      />
    </>
  );
};

export default NewPostDetails;
