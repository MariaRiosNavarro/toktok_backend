import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

import NavBarBottom from "../components/Global/NavBarBottom";
import NavBarTop from "../components/Global/NavBarTop";
import BackArrowSvg from "../components/SVG/BackArrowSvg";
import ThreePointsSvg from "../components/SVG/ThreePointsSvg";
import DetailUser from "../components/Global/DetailUser";
import Button from "../components/Global/Button";
import FollowSvg from "../components/SVG/FollowSvg";
import LineSvg from "../components/SVG/LineSvg";
import FeedsGallery from "../components/Global/FeedsGerrery";
import UnFollowSvg from "../components/SVG/UnFollowSvg";
const Detail = () => {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleButtonClick = () => {
    setIsFollowing(!isFollowing);
  };

  const buttonText = isFollowing ? "Unfollow" : "Follow";
  const buttonIcon = isFollowing ? (
    <UnFollowSvg />
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
        {/* <Button
          text="Follow"
          iconComponent={
            <FollowSvg
              svgFillColor="fill-base-100"
              onClick={handleButtonClick}
            />
          }
        /> */}
        <article className="mt-6 flex justify-center ">
          <LineSvg />
        </article>
        <FeedsGallery />
        <section className="grid grid-cols-3 gap-[4px] mt-4">
          <img
            className="h-[124px] rounded-lg"
            src="https://picsum.photos/200?grayscale"
          ></img>
          <img
            className="h-[124px] rounded-lg"
            src="https://picsum.photos/200?blur"
          ></img>
          <img
            className="h-[124px] rounded-lg"
            src="https://picsum.photos/200?blur=2"
          ></img>
          <img
            className="h-[124px] rounded-lg"
            src="https://picsum.photos/200?blur=6"
          ></img>
          <img
            className="h-[124px] rounded-lg"
            src="https://picsum.photos/200?grayscale=3"
          ></img>
          <img
            className="h-[124px] rounded-lg"
            src="https://picsum.photos/200?grayscale=5"
          ></img>
          <img
            className="h-[124px] rounded-lg"
            src="https://picsum.photos/200?blur=8"
          ></img>
          <img
            className="h-[124px] rounded-lg"
            src="https://picsum.photos/200?grayscale=1"
          ></img>
          <img
            className="h-[124px] rounded-lg"
            src="https://picsum.photos/200?grayscale=7"
          ></img>
        </section>
      </main>
      <NavBarBottom
        item={{ home: false, search: false, profile: false, add: false }}
      />
    </>
  );
};

export default Detail;
