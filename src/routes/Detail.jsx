import { useState } from "react";

import NavBarBottom from "../components/Global/NavBarBottom";
import NavBarTop from "../components/Global/NavBarTop";
import BackArrowSvg from "../components/SVG/BackArrowSvg";
import ThreePointsSvg from "../components/SVG/ThreePointsSvg";
import DetailUser from "../components/Global/DetailUser";
import FollowSvg from "../components/SVG/FollowSvg";
import LineSvg from "../components/SVG/LineSvg";
import FeedsGallery from "../components/Global/FeedsGallery";
import UnFollowSvg from "../components/SVG/UnFollowSvg";
import ProfileGallery from "../components/Global/ProfileGallery";

const Detail = () => {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleButtonClick = () => {
    setIsFollowing(!isFollowing);
  };

  const buttonText = isFollowing ? "Unfollow" : "Follow";
  const buttonIcon = isFollowing ? (
    <UnFollowSvg svgFillColor="fill-base-100" />
  ) : (
    <FollowSvg svgFillColor="fill-base-100" />
  );
  return (
    <>
      <NavBarTop
        leftSvgComponent={<BackArrowSvg />}
        leftLink="back"
        leftText=""
        rightSvgComponent={<ThreePointsSvg />}
        rightLink="/"
      />
      <main className="p-6 pb-16">
        <DetailUser />
        <article className="w-full">
          <button
            onClick={handleButtonClick}
            className="flex justify-center items-center gap-2 bg-primary w-full text-lg text-base-100 rounded-3xl py-[10px]"
          >
            <span>{buttonIcon}</span>
            <span>{buttonText}</span>
          </button>
        </article>
        <article className="mt-6 flex justify-center ">
          <LineSvg />
        </article>
        <FeedsGallery />
        <ProfileGallery />
      </main>
      <NavBarBottom
        item={{ home: false, search: false, profile: false, add: false }}
      />
    </>
  );
};

export default Detail;
