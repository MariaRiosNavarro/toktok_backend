import { useTheme } from "../../context/userContext";
const threePointsSvg = () => {
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
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.0002 1.2085C17.9596 1.2085 22.7919 6.03966 22.7919 12.0002C22.7919 17.9595 17.9596 22.7918 12.0002 22.7918C6.03972 22.7918 1.20856 17.9595 1.20856 12.0002C1.20856 6.04083 6.04089 1.2085 12.0002 1.2085Z"
            stroke={theme === "dark" ? "#9E9E9E" : "#212121"}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Line"
            d="M16.596 12.0152H16.6065"
            stroke={theme === "dark" ? "#9E9E9E" : "#212121"}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Line_2"
            d="M11.9188 12.0152H11.9293"
            stroke={theme === "dark" ? "#9E9E9E" : "#212121"}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Line_3"
            d="M7.2416 12.0152H7.2521"
            stroke={theme === "dark" ? "#9E9E9E" : "#212121"}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </svg>
    </>
  );
};

export default threePointsSvg;
