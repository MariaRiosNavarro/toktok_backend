import AvatarSvg from "../SVG/AvatarSvg";

const ProfileAvatar = ({ image }) => {
  return (
    <>
      <div className="avatar">
        <div className="w-[120px] rounded-full">
          {image ? <img src={image} /> : <AvatarSvg width={"120"} />}
        </div>
      </div>
    </>
  );
};

export default ProfileAvatar;
