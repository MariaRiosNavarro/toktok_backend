import { useTheme } from "../../../context/userContext";

const SettingsSavedSvg = () => {
  const { theme } = useTheme();
  return (
    <>
      <svg
        width="22"
        height="24"
        viewBox="0 0 20 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Group">
          <path
            id="Line"
            d="M5.96619 8.75399H13.9637"
            stroke={theme === "dark" ? "#9E9E9E" : "#212121"}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Vector"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.96528 0.916748C2.51378 0.916748 1.25495 2.00408 1.25495 10.7506C1.25495 20.5424 1.07178 23.0834 2.93378 23.0834C4.79462 23.0834 7.83378 18.7854 9.96528 18.7854C12.0968 18.7854 15.1359 23.0834 16.9968 23.0834C18.8588 23.0834 18.6756 20.5424 18.6756 10.7506C18.6756 2.00408 17.4168 0.916748 9.96528 0.916748Z"
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

export default SettingsSavedSvg;
