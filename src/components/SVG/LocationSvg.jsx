import { useTheme } from "../../context/userContext";

const LocationSvg = () => {
  const { theme } = useTheme();
  return (
    <>
      <svg
        width="20"
        height="24"
        viewBox="0 0 20 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Group">
          <path
            id="Vector"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.9286 10.4956C12.9286 8.88414 11.6228 7.57837 10.0113 7.57837C8.40105 7.57837 7.09528 8.88414 7.09528 10.4956C7.09528 12.1059 8.40105 13.4117 10.0113 13.4117C11.6228 13.4117 12.9286 12.1059 12.9286 10.4956Z"
            stroke={theme === "dark" ? "#9E9E9E" : "#212121"}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Vector_2"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.99943 22.5C6.6184 22.5 1.25 16.6184 1.25 10.3651C1.25 5.46954 5.16662 1.5 9.99943 1.5C14.8322 1.5 18.75 5.46954 18.75 10.3651C18.75 16.6184 13.3816 22.5 9.99943 22.5Z"
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

export default LocationSvg;
