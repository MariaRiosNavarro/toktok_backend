import NavBarTop from "../../components/Global/NavBarTop";
import NewPostSvg from "../../components/SVG/NewPostSvg";
import CameraSvg from "../../components/SVG/CameraSvg";

const NewPost = () => {
  return (
    <>
      <NavBarTop
        leftSvgComponent={<NewPostSvg />}
        leftLink="/"
        leftText="New Post"
        rightSvgComponent=""
      />
      <section className="p-6">
        <div className="h-[380px] bg-secondary rounded-[32px] px-[55px] flex justify-center items-center my-6">
          <button className="bg-primary w-full text-lg text-base-100 rounded-3xl py-[10px] flex justify-center items-center gap-2">
            <span>
              <CameraSvg />
            </span>
            <span>Upload</span>
          </button>
        </div>
      </section>
    </>
  );
};

export default NewPost;
