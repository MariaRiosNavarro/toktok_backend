/* eslint-disable react/prop-types */
import { useTheme } from "../../context/userContext";

const HearthSvg = (props) => {
  const { theme } = useTheme();
  return (
    <>
      <svg
        width="24"
        height="22"
        viewBox="0 0 24 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={props.selected ? "fill-primary" : "none"}
      >
        <g id="Group">
          <path
            id="Vector"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.4089 11.5207C0.157071 7.61234 1.62124 2.75318 5.7244 1.43251C7.88274 0.736012 10.5462 1.31701 12.0594 3.40418C13.4862 1.24001 16.2267 0.740679 18.3827 1.43251C22.4847 2.75318 23.9571 7.61234 22.7064 11.5207C20.7581 17.7157 13.9599 20.9427 12.0594 20.9427C10.1601 20.9427 3.42257 17.788 1.4089 11.5207Z"
            stroke={theme === "dark" ? "#9E9E9E" : "#212121"}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Vector_2"
            d="M16.42 5.82471C17.8282 5.96937 18.709 7.08587 18.6565 8.65037"
            stroke={theme === "dark" ? "#9E9E9E" : "#212121"}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </>
  );
};

export default HearthSvg;
