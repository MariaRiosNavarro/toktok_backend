const UnFollowSvg = (props) => {
  return (
    <>
      <div className="flex items-center">
        <svg
          width="13"
          height="17"
          viewBox="0 0 13 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.5522 4.77253C10.5522 7.09771 8.71216 8.96157 6.41669 8.96157C4.12121 8.96157 2.28116 7.09771 2.28116 4.77253C2.28116 2.44735 4.12121 0.583496 6.41669 0.583496C8.71216 0.583496 10.5522 2.44735 10.5522 4.77253ZM0.166687 13.7055C0.166687 11.5519 3.04521 11.0128 6.41669 11.0128C9.80568 11.0128 12.6667 11.5705 12.6667 13.7241C12.6667 15.8778 9.78733 16.4168 6.41669 16.4168C3.02769 16.4168 0.166687 15.8583 0.166687 13.7055Z"
            fill="white"
          />
        </svg>
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="ml-[-4px] w-3"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.41339 5.58579L5 7L8.41421 10.4142L5 13.8284L6.41339 15.2426L9.82859 11.8284L13.2428 15.2426L14.6569 13.8284L11.2427 10.4142L14.6569 7L13.2428 5.58579L9.82859 9L6.41339 5.58579Z"
            fill="white"
            className={props.svgFillColor}
          />
        </svg>
      </div>
    </>
  );
};

export default UnFollowSvg;
