import { useTheme } from "../../../context/userContext";
const SettingsArchiveSvg = () => {
  const { theme } = useTheme();
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.0001 16.7672V7.23315"
        stroke={theme === "dark" ? "#9E9E9E" : "#212121"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.3773 12.3755C16.3773 12.3755 13.428 16.7668 12 16.7668C10.572 16.7668 7.62733 12.3755 7.62733 12.3755"
        stroke={theme === "dark" ? "#9E9E9E" : "#212121"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.20845 12.0002C1.20845 20.0933 3.90695 22.7918 12.0001 22.7918C20.0933 22.7918 22.7918 20.0933 22.7918 12.0002C22.7918 3.907 20.0933 1.2085 12.0001 1.2085C3.90695 1.2085 1.20845 3.907 1.20845 12.0002Z"
        stroke={theme === "dark" ? "#9E9E9E" : "#212121"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SettingsArchiveSvg;
