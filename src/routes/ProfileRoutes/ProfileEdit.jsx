import { useRef, useState } from "react";

import NavBarTop from "../../components/Global/NavBarTop";
import ProfileAvatar from "../../components/Global/ProfileAvatar";
import EditForm from "../../components/Profile/EditForm";
import BackArrowSvg from "../../components/SVG/BackArrowSvg";
import EditImageSvg from "../../components/SVG/EditImageSvg";

const ProfileEdit = () => {
  const fileInputRef = useRef();
  const [image, setImage] = useState();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setImage(imageUrl);
  };

  return (
    <>
      <NavBarTop
        leftSvgComponent={<BackArrowSvg />}
        leftLink="back"
        leftText=""
        rightSvgComponent=""
        rightLink=""
      />
      <main className="p-6 ">
        <section className="flex flex-col  items-center  justify-center relative">
          <div>
            <ProfileAvatar image={image} />
          </div>
          <label
            htmlFor="uploadFile1"
            className="absolute right-[123px] bottom-2"
          >
            <EditImageSvg />
            <input
              type="file"
              id="uploadFile1"
              className="hidden"
              onChange={handleFileChange}
            />
          </label>
        </section>
        <section className="mt-6">
          <EditForm />
        </section>
      </main>
    </>
  );
};

export default ProfileEdit;
