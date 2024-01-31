import { useTheme } from "../../context/userContext";
const EditSvg = () => {
  const { theme } = useTheme();
  return (
    <>
      <svg
        width="24"
        height="23"
        viewBox="0 0 24 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Group">
          <path
            id="Line"
            d="M14.0386 21.8501H22.5"
            stroke={theme === "dark" ? "#9E9E9E" : "#212121"}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Vector"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.91 2.42726C13.8149 1.34575 15.4417 1.18716 16.5456 2.07369C16.6066 2.12178 18.5677 3.64525 18.5677 3.64525C19.7805 4.37839 20.1573 5.93696 19.4076 7.12635C19.3678 7.19005 8.2806 21.0586 8.2806 21.0586C7.91174 21.5187 7.3518 21.7904 6.75339 21.7969L2.50745 21.8502L1.55079 17.801C1.41677 17.2317 1.55079 16.6337 1.91965 16.1736L12.91 2.42726Z"
            stroke={theme === "dark" ? "#9E9E9E" : "#212121"}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Line_2"
            d="M10.8576 5.00098L17.2186 9.88596"
            stroke={theme === "dark" ? "#9E9E9E" : "#212121"}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </svg>
    </>
  );
};

export default EditSvg;
