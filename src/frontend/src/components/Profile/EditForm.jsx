import { useState } from "react";
import { useTheme } from "../../context/userContext";
import { useUserContext } from "../../context/loginContext";

const EditForm = (props) => {
  const { loginUser } = useUserContext();
  const { theme } = useTheme();
  const [showToast, setShowToast] = useState(false);

  // -----------------------------------------------------Styling
  let commonStyles =
    "rounded-xl px-[20px] p-4 h-6 focus:border-none focus:outline-none";
  const darkStyles = "bg-[#9E9E9E] placeholder:text-gray-500 text-gray-700";
  const lightStyles = "bg-[#FAFAFA]";
  const inputClassNames = `${commonStyles} ${
    theme === "dark" ? darkStyles : lightStyles
  }`;

  // ------------------------------------------------ EDIT FETCH
  const uploadProfile = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    // Felder herausfiltern, die geändert wurden (keinen Standardwert haben)
    const formDataObject = Object.fromEntries(
      Array.from(formData.entries()).filter(
        ([key, value]) => value.trim() !== "" && value.trim() !== loginUser[key]
      )
    );

    // Prüfen, ob mindestens ein Feld geändert wurde
    if (Object.keys(formDataObject).length > 0) {
      formData.append("userId", loginUser._id);

      console.log("form data:", formDataObject);

      try {
        const response = await fetch(
          import.meta.env.VITE_BACKEND_URL + "/api/users/edit",
          {
            method: "PUT",
            credentials: "include",
            body: formData,
          }
        );

        if (response.ok) {
          // toast
          setShowToast(true);
          setTimeout(() => {
            setShowToast(false);
          }, 3000);
          console.log("✅", await response.json());
        } else {
          console.log("Request failed with status:👺", response.status);
          const errorBody = await response.text();
          console.log("Error Body:", errorBody);
        }
      } catch (error) {
        console.log(error.message);
      }
    } else {
      console.log("Gar nichts würde geändert");
    }
  };

  // ---------------------Formated Date

  let formattedDateStr;

  if (loginUser?.birthday) {
    const originalDate = new Date(loginUser.birthday);
    const day = originalDate.getDate();
    const month = originalDate.getMonth() + 1;
    const year = originalDate.getFullYear();
    formattedDateStr = `${day}-${month}-${year}`;
  }

  return (
    <>
      {showToast && (
        <div className="toast toast-center toast-middle ">
          <div className="alert alert-info bg-primary text-base-100">
            <span>Upload successfully</span>
          </div>
        </div>
      )}
      <form onSubmit={uploadProfile} className="flex flex-col [&>*]:m-6">
        {/* -------------------------------------------------------------------------name */}
        <input
          type="text"
          name="name"
          placeholder="Name"
          defaultValue={loginUser?.name || ""}
          className={inputClassNames}
        />
        {/* -------------------------------------------------------------------------username */}
        <input
          type="text"
          name="username"
          defaultValue={loginUser?.username || ""}
          className={inputClassNames}
        />
        {/* -------------------------------------------------------------------------job*/}
        <input
          type="text"
          name="job"
          placeholder="Job"
          defaultValue={loginUser?.job || ""}
          className={inputClassNames}
        />
        {/* -------------------------------------------------------------------------Birthday Value*/}
        {loginUser?.birthday ? (
          <div className="flex flex-col gap-4">
            <p
              className={`rounded-xl px-[20px] p-[4px]  focus:border-none focus:outline-none ${
                theme === "dark"
                  ? "bg-[#9E9E9E]  text-gray-600"
                  : "bg-[#FAFAFA] text-secondary "
              }`}
            >
              {formattedDateStr}
            </p>
          </div>
        ) : (
          <input
            type="date"
            name="birthday"
            // defaultValue={loginUser?.birthday || ""}
            className={inputClassNames}
          />
        )}
        {/* -------------------------------------------------------------------------Birthday Input*/}

        {/* -------------------------------------------------------------------------tel*/}
        <input
          type="tel"
          name="telephone"
          placeholder="Telephone"
          defaultValue={loginUser?.telephone || ""}
          className={inputClassNames}
        />
        {/* -------------------------------------------------------------------------description*/}
        <textarea
          name="description"
          placeholder="About you"
          defaultValue={loginUser?.description || ""}
          className={`rounded-xl px-[20px] p-4   ${
            theme === "dark"
              ? "bg-[#9E9E9E] placeholder:text-gray-500 text-gray-700"
              : "bg-[#FAFAFA]"
          }`}
        ></textarea>
        <input
          value="Update"
          type="submit"
          className=" bg-primary  text-lg text-base-100 rounded-3xl py-[10px] mx-auto"
        />
      </form>
    </>
  );
};

export default EditForm;
