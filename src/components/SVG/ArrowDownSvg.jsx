import { useTheme } from "../../context/userContext";

const ArrowDownSvg = (props) => {
  const { theme } = useTheme();
  return (
    <>
      <svg
        width="12"
        height="8"
        viewBox="0 0 12 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Group">
          <path
            id="Vector"
            d="M10.6667 1.66663L6.00001 6.33329L1.33334 1.66663"
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

export default ArrowDownSvg;
