import { useEffect, useState } from "react";
import NavBarBottom from "../../components/Global/NavBarBottom";
import DetailUser from "../../components/Global/DetailUser";
import LineSvg from "../../components/SVG/LineSvg";
import FeedsGallery from "../../components/Global/FeedsGallery";
import ProfileGallery from "../../components/Global/ProfileGallery";
import ProfileHeader from "../../components/Profile/ProfileHeader";
import SettingsActivitySvg from "../../components/SVG/settingsSVG/SettingsActivitySvg";
import SettingdFriendsSvg from "../../components/SVG/settingsSVG/SettingsFriendsSVG";
import SettingsInfoSvg from "../../components/SVG/settingsSVG/SettingsInfoSvg";
import SettingsMainSvg from "../../components/SVG/settingsSVG/SettingsMainSvg";
import SettingsQRSvg from "../../components/SVG/settingsSVG/SettingsQRSvg";
import SettingsSavedSvg from "../../components/SVG/settingsSVG/SettingsSavedSvg";
import SettingsArchiveSvg from "../../components/SVG/settingsSVG/SettingsArchiveSvg";
import HearthSvg from "../../components/SVG/HearthSvg";

const ProfileDetail = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <ProfileHeader
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
      <main className="p-6 pb-16">
        <DetailUser />

        <article className="mt-6 flex justify-center ">
          <LineSvg />
        </article>
        <FeedsGallery />
        <ProfileGallery />
      </main>

      {isModalOpen && (
        <div
          className="fixed inset-0  bg-gray-800 bg-opacity-50"
          onClick={closeModal} // Hier wird closeModal aufgerufen, wenn der Benutzer auf das Overlay klickt
        ></div>
      )}
      <div
        className={`[&>*]:mb-6 fixed  bottom-0 z-50 bg-white w-full p-6 pb-16 rounded-t-[40px] transform  ${
          isModalOpen
            ? "translate-y-0  transition-transform duration-300 ease-out"
            : "translate-y-full  transition-transform duration-300 ease-in"
        }`}
      >
        <article className="flex gap-5 ">
          <SettingsMainSvg />
          <p className="text-[18px]">Setting</p>
        </article>
        <article className="flex gap-5 ">
          <SettingsArchiveSvg />
          <p className="text-[18px]">Archive</p>
        </article>
        <article className="flex gap-5 ">
          <SettingsActivitySvg />
          <p className="text-[18px]">Your Activity</p>
        </article>
        <article className="flex gap-5 ">
          <SettingsQRSvg />
          <p className="text-[18px]">QR code</p>
        </article>
        <article className="flex gap-5 ">
          <SettingsSavedSvg />
          <p className="text-[18px]">Saved</p>
        </article>
        <article className="flex gap-5 ">
          <SettingdFriendsSvg />
          <p className="text-[18px]">Close Friends</p>
        </article>
        <article className="flex gap-5 ">
          <HearthSvg />
          <p className="text-[18px]">Favorites</p>
        </article>
        <article className="flex gap-5 ">
          <SettingsInfoSvg />
          <p className="text-[18px]">Information Center</p>
        </article>
      </div>
      <NavBarBottom
        item={{ home: false, search: false, profile: true, add: false }}
      />
    </>
  );
};

export default ProfileDetail;
