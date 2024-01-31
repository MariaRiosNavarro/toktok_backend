import { useTheme } from "../../context/userContext";
const PaperPlaneSvg = () => {
  const { theme } = useTheme();
  return (
    <>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Group">
          <path
            id="Vector"
            d="M16.4712 7.53707L9.79388 14.2857L2.19934 9.53562C1.11121 8.85483 1.33756 7.20201 2.56834 6.84208L20.5998 1.56156C21.7268 1.23123 22.7713 2.28497 22.4365 3.41566L17.1019 21.4345C16.7365 22.6671 15.0931 22.8873 14.4187 21.7945L9.79034 14.2869"
            stroke={theme === "dark" ? "#9E9E9E" : "#212121"}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </svg>
      ;
    </>
  );
};

export default PaperPlaneSvg;
