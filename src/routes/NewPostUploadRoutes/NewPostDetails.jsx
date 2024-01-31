import { useRef, useState, useEffect } from "react";
import BackArrowSvg from "../../components/SVG/BackArrowSvg";
import NavBarTop from "../../components/Global/NavBarTop";
import NavBarBottom from "../../components/Global/NavBarBottom";
import LocationSvg from "../../components/SVG/LocationSvg";
import { useTheme } from "../../context/userContext";

const NewPostDetails = ({ selectedImage }) => {
  // const { loginUser } = useLoginContext();
  const userImg = ""; //loginUser.img;
  const { theme } = useTheme();
  const [value, setValue] = useState("");
  const [inputVisible, setInputVisible] = useState(false);

  const imgRef = useRef();
  const descriptionRef = useRef();
  const locationRef = useRef();
  const facebookRef = useRef();
  const twitterRef = useRef();
  const tumblrRef = useRef();

  useEffect(() => {
    if (descriptionRef.current) {
      descriptionRef.current.style.height = "auto";
      const scrollHeight = descriptionRef.current.scrollHeight;
      descriptionRef.current.style.height = scrollHeight + "px";
    }
  }, [value]);

  const handleChange = (event) => {
    const val = event.target?.value;
    setValue(val);
  };

  const uploadPost = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    if (imgRef.current && imgRef.current.files.length > 0) {
      formData.append("img", imgRef.current.files[0]);
    }
    console.log("hello hier kommt ein Fetch");
  };

  const placeholder =
    "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg";

  const handleInputVisibility = () => {
    setInputVisible((prev) => !prev);
  };

  return (
    <>
      <NavBarTop
        leftSvgComponent={<BackArrowSvg />}
        leftLink="/upload"
        leftText="New Post"
        rightSvgComponent=""
      />
      <section className="p-6 pb-12">
        <form onSubmit={uploadPost}>
          <div className="flex gap-4 items-start">
            <img
              ref={imgRef}
              id="img"
              name="img"
              src={userImg ? userImg : placeholder}
              className="w-[56px] h-[56px] rounded-full"
              alt="userImage"
            />
            <textarea
              id="description"
              name="description"
              ref={descriptionRef}
              onChange={handleChange}
              className={
                theme === "dark"
                  ? "bg-[#9E9E9E] mx-[20px] rounded-xl px-[20px] pt-4 mb-6 h-10 placeholder:text-gray-500 text-gray-700"
                  : "bg-[#FAFAFA] mx-[20px] rounded-xl px-[20px] pt-4 h-10 mb-6"
              }
              placeholder="Write a caption..."
              value={value}
            />
            <img
              className="w-[56px] h-[56px] rounded-xl"
              src={selectedImage}
              alt=""
            />
          </div>
          <hr className="text-secondary" />

          <div className="flex  items-center py-8  gap-4 ">
            <label
              htmlFor="location"
              onClick={handleInputVisibility}
              className="flex gap-4 "
            >
              <LocationSvg onClick={handleInputVisibility} />
              <span className={inputVisible ? "hidden" : ""}>
                Add Location{" "}
              </span>
            </label>
            <input
              type="text"
              placeholder="Write your location"
              ref={locationRef}
              className={
                inputVisible
                  ? theme === "dark"
                    ? "bg-[#9E9E9E]  rounded-xl px-[20px] p-4  h-6  placeholder:text-gray-500 text-gray-700"
                    : "bg-[#FAFAFA]  rounded-xl px-[20px] p-4  h-6 "
                  : "hidden"
              }
            />
          </div>
          <hr className="text-secondary" />
          <input
            type="file"
            style={{ display: "none" }}
            onChange={(event) => setImage(selectedImage)}
          />
        </form>
      </section>
      <NavBarBottom
        item={{ home: false, search: false, profile: false, add: true }}
      />
    </>
  );
};

export default NewPostDetails;
