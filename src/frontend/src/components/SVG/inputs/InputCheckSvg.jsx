import { useTheme } from "../../context/userContext";

const InputCheckSvg = () => {
  const { theme } = useTheme();
  return (
    <>
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Group">
          <path
            id="Vector"
            d="M13.6208 6.51587C13.6208 6.51587 10.9457 9.7264 8.98919 9.7264C7.03347 9.7264 4.32837 6.51587 4.32837 6.51587"
            stroke={theme === "dark" ? "#9E9E9E" : "#212121"}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Vector_2"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.0434 8.97404C1.0434 3.27562 3.02753 1.37671 8.97991 1.37671C14.9323 1.37671 16.9164 3.27562 16.9164 8.97404C16.9164 14.6716 14.9323 16.5714 8.97991 16.5714C3.02753 16.5714 1.0434 14.6716 1.0434 8.97404Z"
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

export default InputCheckSvg;
