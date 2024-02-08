import { useRef, useState } from "react";

import NavBarTop from "../../components/Global/NavBarTop";
import NavBarBottom from "../../components/Global/NavBarBottom";
import ProfileAvatar from "../../components/Global/ProfileAvatar";
import EditForm from "../../components/Profile/EditForm";
import BackArrowSvg from "../../components/SVG/BackArrowSvg";
import EditImageSvg from "../../components/SVG/EditImageSvg";
import { useUserContext } from "../../context/loginContext";

const ProfileEdit = () => {
  const fileInputRef = useRef();
  const { loginUser, setRefresh } = useUserContext();

  const [image, setImage] = useState(loginUser?.img);
  const [showToast, setShowToast] = useState(false);

  // console.log("----------", loginUser?.img);

  const handleFileChange = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    const userId = loginUser?._id;

    formData.append("userId", userId);
    formData.append("img", file);

    for (const pair of formData.entries()) {
      console.log(pair[0] + ": " + pair[1]);
    }

    try {
      const response = await fetch(
        import.meta.env.VITE_BACKEND_URL + "/api/users/image",
        {
          method: "PUT",
          credentials: "include",
          body: formData,
        }
      );

      if (response.ok) {
        setImage(imageUrl);
        // toast
        setShowToast(true);
        setTimeout(() => {
          setShowToast(false);
        }, 3000);
        setRefresh((prev) => !prev);
        // console.log("✅", await response.json());
      } else {
        console.log("Request failed with status:👺", response.status);
        // const errorBody = await response.text();
        console.log("Error Body:", errorBody);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      {showToast && (
        <div className="toast toast-center toast-middle ">
          <div className="alert alert-info bg-primary text-base-100">
            <span>Picture Upload successfully</span>
          </div>
        </div>
      )}
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
            <ProfileAvatar image={loginUser?.img ? loginUser.img : image} />
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
      <NavBarBottom
        item={{ home: false, search: false, profile: false, add: false }}
      />
    </>
  );
};

export default ProfileEdit;
