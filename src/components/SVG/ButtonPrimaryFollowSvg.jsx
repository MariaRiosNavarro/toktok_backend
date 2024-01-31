import { useTheme } from "../../context/userContext";

const ButtonPrimaryFollowSvg = () => {
  const { theme } = useTheme();
  return (
    <>
      <svg
        width="17"
        height="17"
        viewBox="0 0 17 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Group">
          <path
            id="Union"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.41669 8.96157C8.71216 8.96157 10.5522 7.09771 10.5522 4.77253C10.5522 2.44735 8.71216 0.583496 6.41669 0.583496C4.12121 0.583496 2.28116 2.44735 2.28116 4.77253C2.28116 7.09771 4.12121 8.96157 6.41669 8.96157ZM6.41669 11.0128C3.04521 11.0128 0.166687 11.5519 0.166687 13.7055C0.166687 15.8583 3.02769 16.4168 6.41669 16.4168C9.78733 16.4168 12.6667 15.8778 12.6667 13.7241C12.6667 11.5705 9.80568 11.0128 6.41669 11.0128ZM15.0816 6.49005H16.0842C16.4969 6.49005 16.8334 6.83125 16.8334 7.24973C16.8334 7.6682 16.4969 8.00941 16.0842 8.00941H15.0816V8.99048C15.0816 9.40896 14.746 9.75016 14.3325 9.75016C13.9198 9.75016 13.5834 9.40896 13.5834 8.99048V8.00941H12.5825C12.169 8.00941 11.8334 7.6682 11.8334 7.24973C11.8334 6.83125 12.169 6.49005 12.5825 6.49005H13.5834V5.50984C13.5834 5.09137 13.9198 4.75016 14.3325 4.75016C14.746 4.75016 15.0816 5.09137 15.0816 5.50984V6.49005Z"
            fill="white"
          />
        </g>
      </svg>
    </>
  );
};

export default ButtonPrimaryFollowSvg;
