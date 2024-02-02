import { useState, useEffect } from "react";

import NavBarBottom from "../components/Global/NavBarBottom";
import NavBarTop from "../components/Global/NavBarTop";
import BackArrowSvg from "../components/SVG/BackArrowSvg";
import PointsSvg from "../components/SVG/PointsSvg";
import DetailUser from "../components/Global/DetailUser";
import FollowSvg from "../components/SVG/FollowSvg";
import LineSvg from "../components/SVG/LineSvg";
import FeedsGallery from "../components/Global/FeedsGallery";
import UnFollowSvg from "../components/SVG/UnFollowSvg";
import ProfileGallery from "../components/Global/ProfileGallery";

const Detail = () => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [detailUserData, setDetailUserData] = useState(null);
  const _id = "65ba1e3bf62d099c7f3c041c"; // user id aus params

  useEffect(() => {
    async function getUserData() {
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/users?id=${_id}`,
        {
          method: "GET",
          headers: {
            "content-type": "application/json",
          },
          credentials: "include",
        }
      );
      const data = await res.json();

      if (res.ok) {
        setDetailUserData(data);
      }
    }
    getUserData();
  }, []);

  const handleButtonClick = () => {
    setIsFollowing(!isFollowing);
  };

  const buttonText = isFollowing ? "Unfollow" : "Follow";
  const buttonIcon = isFollowing ? (
    <UnFollowSvg svgFillColor="fill-base-100" />
  ) : (
    <FollowSvg svgFillColor="fill-base-100" />
  );
  if (!detailUserData) return <h1>Loading.....</h1>;
  return (
    <>
      <NavBarTop
        leftSvgComponent={<BackArrowSvg />}
        leftLink="back"
        leftText=""
        rightSvgComponent={<PointsSvg />}
        rightLink="/"
      />
      <main className="p-6 pb-16">
        <DetailUser user={detailUserData.user} />
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
        <ProfileGallery postArr={detailUserData.user.posts} />
      </main>
      <NavBarBottom
        item={{ home: false, search: false, profile: false, add: false }}
      />
    </>
  );
};

export default Detail;
