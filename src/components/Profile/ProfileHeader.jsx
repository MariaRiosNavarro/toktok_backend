import { Link, useNavigate } from "react-router-dom";
import AddPostSvg from "../SVG/AddPostSvg";
import EditSvg from "../SVG/EditSvg";
import PointsSvg from "../SVG/PointsSvg";
import { useTheme } from "../../context/userContext";
import BackArrowSvg from "../SVG/BackArrowSvg";

const ProfileHeader = (props) => {
  const { theme, toggleTheme } = useTheme();
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

          <h3 className="text-left pl-4 text-2xl font-bold rounded-xl mx-auto">
            John_doe
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
              <path d="M480-83.384 362.75-200H200v-162.75L83.384-480 200-597.25V-760h162.75L480-876.616 597.25-760H760v162.75L876.616-480 760-362.75V-200H597.25L480-83.384Zm0-227.385q70.231 0 119.731-49.5T649.231-480q0-70.231-49.5-119.731T480-649.231q-70.231 0-119.731 49.5T310.769-480q0 70.231 49.5 119.731T480-310.769Zm0-40q-53.846 0-91.538-37.693-37.693-37.692-37.693-91.538t37.693-91.538q37.692-37.693 91.538-37.693t91.538 37.693q37.693 37.692 37.693 91.538t-37.693 91.538Q533.846-350.769 480-350.769ZM480-140l100-100h140v-140l100-100-100-100v-140H580L480-820 380-720H240v140L140-480l100 100v140h140l100 100Zm0-340Z" />
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
