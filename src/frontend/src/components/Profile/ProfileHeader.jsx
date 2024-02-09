import { Link, useNavigate } from "react-router-dom";
import AddPostSvg from "../SVG/AddPostSvg";
import EditSvg from "../SVG/EditSvg";
import PointsSvg from "../SVG/PointsSvg";
import { useTheme } from "../../context/userContext";
import BackArrowSvg from "../SVG/BackArrowSvg";
import { useUserContext } from "../../context/loginContext";

const ProfileHeader = (props) => {
  const { theme, toggleTheme } = useTheme();
  const { loginUser } = useUserContext();
  const navigate = useNavigate();

  const openModal = () => {
    props.setIsModalOpen(true);
  };

  return (
    <>
      <header className="flex justify-between items-center w-[100%] p-6">
        {/* Left Side Components */}
        <div className="flex items-center">
          <Link to="#" onClick={() => navigate(-1)}>
            <BackArrowSvg />
          </Link>

          <h3 className="text-left pl-4 text-[1.5rem] font-bold rounded-xl mx-auto w-[150px] overflow-hidden">
            {loginUser?.username}
          </h3>
        </div>
        {/* Right Side Components */}
        <div className="flex items-center gap-5 ">
          {/* rightSvgComponent -> It is only shown when it is filled in */}
          <Link to="/upload">
            <AddPostSvg />
          </Link>
          <Link to="/edit">
            <EditSvg />
          </Link>
          <button onClick={openModal}>
            <PointsSvg />
          </button>
          <label className="swap swap-rotate relative right-[-5px]">
            <input
              type="checkbox"
              onChange={toggleTheme}
              checked={theme === "light" ? false : true}
            />

            {/* sun icon */}

            <svg
              className="swap-on fill-primary  "
              xmlns="http://www.w3.org/2000/svg"
              height="34"
              viewBox="0 -960 960 960"
              width="34"
            >
              <path d="M480.005-358.077q50.803 0 86.457-35.562 35.653-35.562 35.653-86.366 0-50.803-35.601-86.457-35.602-35.653-86.462-35.653-50.86 0-86.417 35.601-35.558 35.602-35.558 86.462 0 50.86 35.562 86.417 35.562 35.558 86.366 35.558Zm-.224 47.96q-70.896 0-120.28-49.66t-49.384-120.499q0-70.839 49.66-120.319 49.66-49.481 120.499-49.481t120.319 49.7q49.481 49.7 49.481 120.595 0 70.896-49.7 120.28t-120.595 49.384ZM214.077-456.116H60.117v-47.96h153.96v47.96Zm685.999 0H746.115v-47.96h153.961v47.96Zm-443.96-289.999v-153.961h47.96v153.961h-47.96Zm0 685.999v-153.961h47.96v153.96h-47.96ZM275.924-651.847l-93.269-90.538 33.96-37.96 94.308 94.269-34.999 34.229Zm467.461 468.192-91.923-90.884 32.614-34.807 93.269 91.731-33.96 33.96Zm-93.538-500.421 92.538-91.269 33.96 31.96-90.269 95.115-36.229-35.806ZM179.655-216.615l94.884-90.115 32.037 30.806-87.845 94.154-39.076-34.845ZM480-480Z" />
            </svg>

            {/* moon icon */}

            <svg
              className="swap-off fill-primary  "
              xmlns="http://www.w3.org/2000/svg"
              height="34"
              viewBox="0 -960 960 960"
              width="34"
            >
              <path d="M482.308-160q-133.334 0-226.667-93.333Q162.307-346.667 162.307-480q0-121.539 79.231-210.77Q320.769-780 437.693-796.154q3.23 0 6.346.231 3.115.23 6.115.692-20.231 28.231-32.038 62.808-11.808 34.577-11.808 72.423 0 106.667 74.667 181.333Q555.641-404 662.308-404q38.077 0 72.538-11.808 34.462-11.808 61.923-32.039.462 3 .693 6.116.231 3.115.231 6.346-15.385 116.923-104.616 196.154T482.308-160Zm0-40q88 0 158-48.5t102-126.5q-20 5-40 8t-40 3q-123 0-209.5-86.5t-86.5-209.5q0-20 3-40t8-40q-78 32-126.5 102t-48.5 158q0 116 82 198t198 82Zm-10-270Z" />
            </svg>
          </label>
        </div>
      </header>
    </>
  );
};

export default ProfileHeader;
