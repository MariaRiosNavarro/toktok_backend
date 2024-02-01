import { useState } from "react";
import { useTheme } from "../../context/userContext";
const EditForm = (props) => {
  const { theme } = useTheme();
  const [showToast, setShowToast] = useState(false);
  // Styling
  let commonStyles = "rounded-xl px-[20px] p-4 h-6 ";
  const darkStyles = "bg-[#9E9E9E] placeholder:text-gray-500 text-gray-700";
  const lightStyles = "bg-[#FAFAFA]";
  const inputClassNames = `${commonStyles} ${
    theme === "dark" ? darkStyles : lightStyles
  }`;
  const uploadProfile = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    console.log("form", form);
    setShowToast(true);
    // Timeout zum Ausblenden des Toasts nach einer bestimmten Zeit
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
    //commonStyles += "skeleton"; Ich muss später was in der klasse ändern_______

    // try {
    //   const response = await fetch(
    //     import.meta.env.VITE_BACKEND_URL + "api",
    //     {
    //       method: "POST",
    //       credentials: "include",
    //       body: formData,
    //     }
    //   );

    //   if (response.ok) {
    //     console.log("✅", await response.json());
    //   } else {
    //     console.log("Request failed with status:👺", response.status);
    //     const errorBody = await response.text();
    //     console.log("Error Body:", errorBody);
    //   }
    // } catch (error) {
    //   console.log(error.message);
    // }
  };
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
          placeholder="your name"
          className={inputClassNames}
        />
        <input
          type="text"
          name="username"
          placeholder="your username"
          className={inputClassNames}
        />
        <input
          type="text"
          name="job"
          placeholder="your job"
          className={inputClassNames}
        />
        <input
          type="date"
          name="birthday"
          className={inputClassNames}
          placeholder="Select date"
        />
        <input
          type="tel"
          name="telephone"
          placeholder="your telephone"
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
          placeholder="description"
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
