const FeedsRectangleSvg = ({ width }) => {
  return (
    <svg
      width={width}
      height="4"
      // viewBox={`0 0 ${width} 4`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width={width} height="4" rx="2" fill="#FF4D67" />
    </svg>
  );
};

export default FeedsRectangleSvg;
