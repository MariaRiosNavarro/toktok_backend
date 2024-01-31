import NavBarTop from "../../components/Global/NavBarTop";
import NewPostSvg from "../../components/SVG/NewPostSvg";
import NewPostPic from "../../components/NewPostUpload/NewPostPic";
import NavBarBottom from "../../components/Global/NavBarBottom";

const NewPost = ({ setSelectedImage }) => {
  return (
    <>
      <NavBarTop
        leftSvgComponent={<NewPostSvg />}
        leftLink="/"
        leftText="New Post"
        rightSvgComponent=""
      />
      <NewPostPic setSelectedImage={setSelectedImage} />
      <NavBarBottom
        item={{ home: false, search: false, profile: false, add: true }}
      />
    </>
  );
};

export default NewPost;
