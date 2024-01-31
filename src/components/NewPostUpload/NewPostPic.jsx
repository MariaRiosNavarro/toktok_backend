import PostFakeGallery from "./PostFakeGallery";
import CameraSvg from "../../components/SVG/CameraSvg";
import GallerySvg from "../../components/SVG/GallerySvg";
import ArrowDownSvg from "../../components/SVG/ArrowDownSvg";
import { useTheme } from "../../context/userContext";
import { useNavigate } from "react-router-dom";

const NewPostPic = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();

  const handleAddFile = () => {
    console.log("ADD PIC FUNCTIONALITÄT FEHLT");
    navigate("/upload-detail");
  };

  return (
    <>
      <section className="p-6 pb-20">
        <div
          onClick={handleAddFile}
          className="h-[380px] bg-secondary rounded-[32px] px-[55px] flex justify-center items-center my-6"
        >
          <button className="bg-primary w-full text-lg text-base-100 rounded-3xl py-[10px] flex justify-center items-center gap-2">
            <span>
              <CameraSvg svgFillColor="fill-base-100" />
            </span>
            <span>Upload</span>
          </button>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <h3 className="font-bold ">Gallery</h3>
            <ArrowDownSvg />
          </div>

          <div className="flex items-center gap-4">
            <GallerySvg
              svgFillColor={
                theme === "dark" ? "fill-[#9E9E9E]" : "fill-[#212121]"
              }
            />
            <CameraSvg
              svgFillColor={
                theme === "dark" ? "fill-[#9E9E9E]" : "fill-[#212121]"
              }
            />
          </div>
        </div>
        <div className="py-6">
          <PostFakeGallery />
        </div>
      </section>
    </>
  );
};

export default NewPostPic;
