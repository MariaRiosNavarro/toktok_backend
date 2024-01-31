import { useTheme } from "../../context/userContext";

const NewPostSvg = () => {
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
            id="Line"
            d="M14.7931 9.19397L9.20245 14.7846"
            stroke={theme === "dark" ? "#9E9E9E" : "#212121"}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Line_2"
            d="M14.7999 14.792L9.19989 9.19202"
            stroke={theme === "dark" ? "#9E9E9E" : "#212121"}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Vector"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.20834 12.0002C1.20834 20.0933 3.90684 22.7918 12 22.7918C20.0932 22.7918 22.7917 20.0933 22.7917 12.0002C22.7917 3.907 20.0932 1.2085 12 1.2085C3.90684 1.2085 1.20834 3.907 1.20834 12.0002Z"
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

export default NewPostSvg;
