import { useRef, useState, useEffect } from "react";
import SettingsMainSvg from "../../components/SVG/settingsSVG/SettingsMainSvg";
import LocationSvg from "../../components/SVG/LocationSvg";
import Button from "../../components/Global/Button";
// import { useLoginContext } from "../../context/userContext";

import { useTheme } from "../../context/userContext";

const NewPostCaption = ({ selectedImage }) => {
  // const { loginUser } = useLoginContext();
  const userImg = ""; //loginUser.img;
  const { theme } = useTheme();
  const [value, setValue] = useState("");
  const [inputVisible, setInputVisible] = useState(false);
  const [image, setImage] = useState("");

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
    <form onSubmit={uploadPost}>
      <div className="flex gap-4 items-start">
        {/* --------------------------------------------------USER IMG PREVIEW */}
        <img
          ref={imgRef}
          id="img"
          name="img"
          src={userImg ? userImg : placeholder}
          className="w-[56px] h-[56px] rounded-full"
          alt="userImage"
        />
        {/* --------------------------------------------------form : description */}
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
        {/* --------------------------------------------------preview : selectedImage - INPUT is below and Invisible */}
        <img
          className="w-[56px] h-[56px] rounded-xl"
          src={selectedImage}
          alt=""
        />
      </div>
      <hr className="text-secondary" />
      {/* --------------------------------------------------form : location */}
      <div className="flex  items-center py-8  gap-4 ">
        <label
          htmlFor="location"
          onClick={handleInputVisibility}
          className="flex gap-4 "
        >
          <LocationSvg onClick={handleInputVisibility} />
          <span className={inputVisible ? "hidden" : "font-semibold"}>
            Add Location
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
      {/* --------------------------------------------------form : Social Media Toggle */}

      <h3 className="py-6 font-semibold">Also post to</h3>

      <div className="flex flex-col gap-6 pb-6">
        <div className="form-control ">
          <label className="cursor-pointer label">
            <span className="label-text font-semibold">Facebook</span>
            <input
              type="checkbox"
              className="toggle bg-white [--tglbg:lightgray] border-secondary checked:[--tglbg:#FF4D67]  checked:border-primary checked:bg-white"
            />
          </label>
        </div>
        <div className="form-control ">
          <label className="cursor-pointer label">
            <span className="label-text font-semibold">Twitter</span>
            <input
              type="checkbox"
              className="toggle bg-white [--tglbg:lightgray] border-secondary checked:[--tglbg:#FF4D67]  checked:border-primary checked:bg-white"
            />
          </label>
        </div>
        <div className="form-control ">
          <label className="cursor-pointer label">
            <span className="label-text font-semibold">Tumblr</span>
            <input
              type="checkbox"
              className="toggle bg-white [--tglbg:lightgray] border-secondary checked:[--tglbg:#FF4D67]  checked:border-primary checked:bg-white"
            />
          </label>
        </div>
      </div>
      <hr className="text-secondary" />
      {/* --------------------------------------------------Advanced Settings */}
      <div className="flex items-center py-8  gap-4">
        <SettingsMainSvg />
        <h3 className="py-6 font-semibold">Advanced Settings</h3>
      </div>

      {/* --------------------------------------------------form : img -Invisible */}
      <input
        ref={imgRef}
        type="file"
        style={{ display: "none" }}
        onChange={(event) => setImage(selectedImage)}
      />
      {/* --------------------------------------------------form : img -Invisible */}
      <Button text="Post" />
    </form>
  );
};

export default NewPostCaption;
