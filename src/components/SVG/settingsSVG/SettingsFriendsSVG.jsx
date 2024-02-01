import { useTheme } from "../../../context/userContext";
const SettingsFriendsSVG = () => {
  const { theme } = useTheme();
  return (
    <>
      <svg
        width="26"
        height="22"
        viewBox="0 0 26 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Group">
          <path
            id="Vector"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.9679 20.7629C9.18908 20.7629 5.96091 20.1913 5.96091 17.9023C5.96091 15.6133 9.16808 13.6206 12.9679 13.6206C16.7467 13.6206 19.9749 15.5946 19.9749 17.8824C19.9749 20.1703 16.7677 20.7629 12.9679 20.7629Z"
            stroke={theme === "dark" ? "#9E9E9E" : "#212121"}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Vector_2"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.9679 10.3569C15.4483 10.3569 17.4596 8.34676 17.4596 5.86642C17.4596 3.38609 15.4483 1.37476 12.9679 1.37476C10.4876 1.37476 8.47625 3.38609 8.47625 5.86642C8.46925 8.33742 10.4643 10.3488 12.9364 10.3569H12.9679Z"
            stroke={theme === "dark" ? "#9E9E9E" : "#212121"}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Vector_3"
            d="M20.4226 9.12354C21.8657 8.73737 22.9297 7.42137 22.9297 5.85454C22.9297 4.22004 21.7712 2.85504 20.2289 2.54004"
            stroke={theme === "dark" ? "#9E9E9E" : "#212121"}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Vector_4"
            d="M21.1004 12.802C23.1467 12.802 24.8944 14.1892 24.8944 15.4282C24.8944 16.1573 24.2912 16.9518 23.3766 17.1665"
            stroke={theme === "dark" ? "#9E9E9E" : "#212121"}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Vector_5"
            d="M5.51444 9.12354C4.0701 8.73737 3.0061 7.42137 3.0061 5.85454C3.0061 4.22004 4.16577 2.85504 5.70694 2.54004"
            stroke={theme === "dark" ? "#9E9E9E" : "#212121"}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Vector_6"
            d="M4.83544 12.802C2.7891 12.802 1.04144 14.1892 1.04144 15.4282C1.04144 16.1573 1.6446 16.9518 2.56044 17.1665"
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

export default SettingsFriendsSVG;
