import { useTheme } from "../../context/userContext";

const BackArrowSvg = () => {
  const { theme } = useTheme();
  return (
    <>
      <svg
        width="20"
        height="17"
        viewBox="0 0 20 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Group">
          <path
            id="Line"
            d="M0.958336 8.31991L18.4583 8.31991"
            stroke={theme === "dark" ? "#9E9E9E" : "#212121"}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Vector"
            d="M8.01643 15.3484L0.9581 8.32043L8.01643 1.29126"
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

export default BackArrowSvg;
