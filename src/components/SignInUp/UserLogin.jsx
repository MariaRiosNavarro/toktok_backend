import PasswordSvg from "../SVG/loginSvgs/PasswordSvg";
import HiddenPasswordSvg from "../SVG/loginSvgs/HiddenPasswordSvg";
import EmailSvg from "../SVG/loginSvgs/EmailSvg";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/userContext";
import { useState } from "react";
import ShowPasswordSvg from "../SVG/loginSvgs/ShowPasswordSvg";

const UserLogin = (props) => {
  const { theme } = useTheme();

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <section className="p-6 pb-12 h-screen flex flex-col justify-between">
        <h2 className="text-[40px] font-semibold  w-[80%] leading-[110%]">
          {props.headline}
        </h2>
        <div className="flex flex-col items-center justify-center">
          <svg
            width="140"
            height="140"
            viewBox="0 0 140 140"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              id="Type=Logo Default, Component=Logo"
              clipPath="url(#clip0_1_2179)"
            >
              <rect
                id="Rectangle"
                width="140"
                height="140"
                rx="48"
                fill="url(#paint0_linear_1_2179)"
              />
              <path
                id="Vector"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M65.71 28.2133C47.419 30.0556 32.1499 44.0332 28.6205 62.1652C27.7997 66.3812 27.7923 73.529 28.6039 77.6952C32.773 99.0921 52.6613 114.011 74.0401 111.779C80.2818 111.127 86.2879 109.192 91.3406 106.204C101.675 100.093 109.084 89.5607 111.396 77.6952C112.208 73.529 112.2 66.3812 111.38 62.1652C107.22 40.7984 87.3586 26.0327 65.71 28.2133ZM74.4828 49.4903C80.2542 50.6819 86.281 55.4377 88.8323 60.8138C90.3912 64.0984 90.9446 66.5355 90.9372 70.0839C90.9174 79.7124 84.5332 87.8774 75.1144 90.3207C72.0138 91.125 66.2637 90.9172 63.3398 89.8953C53.2025 86.352 47.2896 75.961 49.4603 65.5037C50.9733 58.2144 57.635 51.384 64.9561 49.6149C67.3858 49.0275 71.9528 48.9681 74.4828 49.4903ZM66.0775 58.0433C60.9248 59.6504 57.5078 64.4073 57.5078 69.9744C57.5078 73.6412 58.577 76.2292 61.1526 78.7978C63.7282 81.3664 66.3233 82.4327 70 82.4327C73.6767 82.4327 76.2718 81.3664 78.8474 78.7978C81.4072 76.245 82.4947 73.6316 82.4866 70.0521C82.4797 66.9778 82.1141 66.2625 81.2341 67.6014C80.478 68.7524 78.0001 69.955 76.3618 69.9663C73.0271 69.9894 70 67.0027 70 63.6895C70 62.1392 71.322 59.4614 72.4521 58.723C73.1326 58.2786 73.2336 58.062 72.8695 57.8315C72.1376 57.3687 67.808 57.5039 66.0775 58.0433Z"
                fill="white"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_1_2179"
                x1="140"
                y1="140"
                x2="-26.5874"
                y2="91.6995"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FF4D67" />
                <stop offset="1" stopColor="#FF8A9B" />
              </linearGradient>
              <clipPath id="clip0_1_2179">
                <rect width="140" height="140" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <form onSubmit={props.onSubmit} className="flex flex-col gap-6">
          <div
            className={
              theme === "dark"
                ? "bg-[#9E9E9E] flex items-center pl-5  rounded-xl"
                : "bg-[#FAFAFA] flex items-center pl-5  rounded-xl"
            }
          >
            <EmailSvg />
            <input
              type="text"
              placeholder="Email"
              // required
              className={
                theme === "dark"
                  ? "bg-transparent focus:border-none focus:outline-none w-[100%] px-6 py-4 placeholder:text-gray-500 text-black"
                  : "bg-transparent focus:border-none focus:outline-none w-[100%] px-6 py-4"
              }
            />
          </div>
          <div
            className={
              theme === "dark"
                ? "bg-[#9E9E9E] flex items-center px-5 rounded-xl"
                : "bg-[#FAFAFA] flex items-center px-5 rounded-xl"
            }
          >
            <PasswordSvg />
            <input
              // required
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className={
                theme === "dark"
                  ? "bg-transparent w-[100%] px-6 py-4  placeholder:text-gray-500 focus:border-none focus:outline-none  text-black "
                  : "bg-transparent w-[100%] px-6 py-4 focus:border-none focus:outline-none "
              }
            />
            <label htmlFor="check">
              {showPassword ? <ShowPasswordSvg /> : <HiddenPasswordSvg />}
            </label>
            <input
              id="check"
              type="checkbox"
              className="hidden"
              value={showPassword}
              onChange={() => setShowPassword((prev) => !prev)}
            />
          </div>
          <input
            type="submit"
            value={props.btn_text}
            className="bg-[#E98090] text-base-100 px-[18px] py-4 rounded-[100px]"
          />
          {props.extra_formLink ? (
            <Link
              className="text-center text-primary font-bold"
              to={props.extra_formLink}
            >
              {props.extra_formText}
            </Link>
          ) : (
            ""
          )}
        </form>
        <div className="flex gap-2 justify-center">
          <h3
            className={theme === "dark" ? "text-secondary" : "text-secondary"}
          >
            {props.subtext}
          </h3>
          <Link to={props.subLink} className="text-primary font-bold">
            {props.subLink_text}
          </Link>
        </div>
      </section>
    </>
  );
};

export default UserLogin;
