import { useState } from "react";
import { useTheme } from "../../context/userContext";
import { useUserContext } from "../../context/loginContext";

const EditForm = (props) => {
  const { loginUser } = useUserContext();
  const { theme } = useTheme();
  const [showToast, setShowToast] = useState(false);
  // Styling
  let commonStyles =
    "rounded-xl px-[20px] p-4 h-6 focus:border-none focus:outline-none";
  const darkStyles = "bg-[#9E9E9E] placeholder:text-gray-500 text-gray-700";
  const lightStyles = "bg-[#FAFAFA]";
  const inputClassNames = `${commonStyles} ${
    theme === "dark" ? darkStyles : lightStyles
  }`;
  const uploadProfile = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const formDataObject = Object.fromEntries(formData.entries());
    console.log("form data:", formDataObject);
    formData.append("userId", loginUser._id);

    //commonStyles += "skeleton"; Ich muss später was in der klasse ändern_______

    try {
      const response = await fetch(
        import.meta.env.VITE_BACKEND_URL + "/api/users/edit",
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          credentials: "include",
          body: formData,
        }
      );

      if (response.ok) {
        setShowToast(true);
        // Timeout zum Ausblenden des Toasts nach einer bestimmten Zeit
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
  };

  let formattedDateStr;

  if (loginUser.birthday) {
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
        <input
          type="text"
          name="name"
          placeholder={loginUser.name}
          className={inputClassNames}
        />
        <input
          type="text"
          name="username"
          placeholder={loginUser.username}
          className={inputClassNames}
        />
        <input
          type="text"
          name="job"
          placeholder={loginUser.job}
          className={inputClassNames}
        />
        {loginUser.birthday && (
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
            <span className="block px-[18px] mt-4 text-gray-500">
              Change Birthday:
            </span>
          </div>
        )}
        <input
          type="date"
          name="birthday"
          className={inputClassNames}
          placeholder=""
        />
        <input
          type="tel"
          name="telephone"
          placeholder={loginUser.telephone}
          className={inputClassNames}
        />
        {/* <select
          className={inputClassNames}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select> */}
        {/* <input
          type="url"
          placeholder="your Website"
          className={inputClassNames}
        /> */}
        <textarea
          name="description"
          placeholder={loginUser.description}
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
