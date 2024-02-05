import { useRef, useState, useEffect } from "react";
import SettingsMainSvg from "../../components/SVG/settingsSVG/SettingsMainSvg";
import LocationSvg from "../../components/SVG/LocationSvg";
import { useUserContext } from "../../context/loginContext";
import { useTheme } from "../../context/userContext";
import { useNavigate } from "react-router-dom";

const NewPostCaption = ({ selectedImage, preview, setPreview }) => {
  const { loginUser } = useUserContext();

  const userImg = ""; //loginUser.img;
  const { theme } = useTheme();
  const { setRefresh } = useUserContext();
  const [value, setValue] = useState("");
  const [inputVisible, setInputVisible] = useState(false);
  const navigate = useNavigate();

  const imgRef = useRef();
  const descriptionRef = useRef();
  const locationRef = useRef();
  // db true/false
  const facebookRef = useRef();
  const twitterRef = useRef();
  const tumblrRef = useRef();

  // useEffect for the Adaptability of the height of the text area

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

    if (!(selectedImage instanceof File)) {
      console.error("Not a File.");
    } else {
      console.log("image");
    }

    console.log("Selected Image:", selectedImage);

    const formData = new FormData();
    formData.append("img", selectedImage);
    formData.append("description", descriptionRef.current.value);
    formData.append("location", locationRef.current.value);
    formData.append("facebook", facebookRef.current.checked);
    formData.append("twitter", twitterRef.current.checked);
    formData.append("tumblr", tumblrRef.current.checked);
    formData.append("user", loginUser._id);

    try {
      const response = await fetch(
        import.meta.env.VITE_BACKEND_URL + "/api/posts/upload",
        {
          method: "POST",
          credentials: "include",
          body: formData,
        }
      );

      if (response.ok) {
        console.log("✅", await response.json());
        setRefresh((prev) => !prev);
        setPreview("");
        navigate("/detail/" + loginUser._id);
      } else {
        console.log("Request failed with status:👺", response.status);
        const errorBody = await response.text();
        console.log("Error Body:", errorBody);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const placeholder =
    "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg";

  const handleInputVisibility = () => {
    setInputVisible((prev) => !prev);
  };
  return (
    <form onSubmit={uploadPost}>
      <div className="flex gap-4 items-start">
        {/* --------------------------------------------------USER IMG PREVIEW - NO INPUT*/}
        <img
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
              ? "bg-[#9E9E9E] mx-[10px] rounded-xl px-[20px] pt-4 mb-6 h-10 placeholder:text-gray-500 text-gray-700"
              : "bg-[#FAFAFA] mx-[10px] rounded-xl px-[20px] pt-4 h-10 mb-6"
          }
          placeholder="Write a caption..."
          value={value}
        />
        {/* --------------------------------------------------preview : selectedImage - INPUT is below and Invisible */}
        <img className="w-[56px] h-[56px] rounded-xl" src={preview} alt="" />
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
              ref={facebookRef}
              type="checkbox"
              className="toggle bg-white [--tglbg:lightgray] border-secondary checked:[--tglbg:#FF4D67]  checked:border-primary checked:bg-white"
            />
          </label>
        </div>
        <div className="form-control ">
          <label className="cursor-pointer label">
            <span className="label-text font-semibold">Twitter</span>
            <input
              ref={twitterRef}
              type="checkbox"
              className="toggle bg-white [--tglbg:lightgray] border-secondary checked:[--tglbg:#FF4D67]  checked:border-primary checked:bg-white"
            />
          </label>
        </div>
        <div className="form-control ">
          <label className="cursor-pointer label">
            <span className="label-text font-semibold">Tumblr</span>
            <input
              ref={tumblrRef}
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
      <button
        type="submit"
        onClick={uploadPost}
        className="bg-primary w-full text-lg text-base-100 rounded-3xl py-[10px] flex justify-center items-center gap-2"
      >
        Post
      </button>
    </form>
  );
};

export default NewPostCaption;
