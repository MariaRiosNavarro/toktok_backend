import NavBarTop from "../../components/Global/NavBarTop";
import NewPostSvg from "../../components/SVG/NewPostSvg";
import NewPostPic from "../../components/NewPostUpload/NewPostPic";
import NavBarBottom from "../../components/Global/NavBarBottom";

const NewPost = ({ setSelectedImage, preview, setPreview }) => {
  return (
    <>
      <NavBarTop
        leftSvgComponent={<NewPostSvg />}
        leftLink="back"
        leftText="New Post"
        rightSvgComponent=""
      />
      <NewPostPic
        setSelectedImage={setSelectedImage}
        preview={preview}
        setPreview={setPreview}
      />
      <NavBarBottom
        item={{ home: false, search: false, profile: false, add: true }}
      />
    </>
  );
};

export default NewPost;
