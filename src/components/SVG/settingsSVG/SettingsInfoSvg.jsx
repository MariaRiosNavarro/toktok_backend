import { useTheme } from "../../context/userContext";
const SettingsInfoSvg = () => {
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22.7919 11.9998C22.7919 20.093 20.0934 22.7915 12.0002 22.7915C3.90707 22.7915 1.20857 20.093 1.20857 11.9998C1.20857 3.90667 3.90707 1.20817 12.0002 1.20817C20.0934 1.20817 22.7919 3.90667 22.7919 11.9998Z"
            stroke={theme === "dark" ? "#9E9E9E" : "#212121"}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Line"
            d="M12.0002 16.5442V12"
            stroke={theme === "dark" ? "#9E9E9E" : "#212121"}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Line_2"
            d="M12.0052 7.91667H11.9947"
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

export default SettingsInfoSvg;
