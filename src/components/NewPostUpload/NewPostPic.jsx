// import PostFakeGallery from "./PostFakeGallery";
// import CameraSvg from "../SVG/CameraSvg";
// import GallerySvg from "../SVG/GallerySvg";
// import ArrowDownSvg from "../SVG/ArrowDownSvg";
// import { useTheme } from "../../context/userContext";
// import { useNavigate } from "react-router-dom";

// import { useRef, useState, useEffect } from "react";

// const NewPostPic = ({ setSelectedImage }) => {
//   const { theme } = useTheme();
//   const navigate = useNavigate();

//   const [image, setImage] = useState();
//   const [preview, setPreview] = useState();

//   //create reference
//   const fileInputRef = useRef();
//   //simulate click on this input  -attach ref to input
//   // to put value in state we need to put onChange

//   const handleImageChange = (event) => {
//     const file = event.target.files[0];
//     setSelectedImage(file);
//     setImage(file);
//   };

//   useEffect(() => {
//     if (image) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setPreview(reader.result);
//       };

//       //reader.readAsArrayBuffer <-  arraybuffer
//       reader.readAsDataURL(image); //represented as a base64string
//     } else {
//       setPreview(null);
//     }
//   }, [image]);

//   const navigateToEditPost = () => {
//     navigate("/upload-detail");
//     setSelectedImage(preview);
//   };

//   return (
//     <>
//       <section className="p-6 pb-12">
//         <form
//           className={`h-[380px] bg-secondary rounded-[32px]  flex justify-center items-center my-6   ${
//             preview ? "px-[0]" : ""
//           }`}
//         >
//           <button
//             className={`bg-primary w-full text-lg text-base-100 rounded-3xl py-[10px] flex justify-center items-center gap-2 mx-[55px] ${
//               preview ? "hidden" : ""
//             }`}
//             onClick={(event) => {
//               event.preventDefault();
//               fileInputRef.current.click();
//             }}
//           >
//             <span>
//               <CameraSvg svgFillColor="fill-base-100" />
//             </span>
//             <span>Upload</span>
//           </button>
//           <img
//             src={preview}
//             className={
//               preview ? "rounded-[32px] min-w-[100%] h-[100%] object-cover" : ""
//             }
//           />
//           {/* <input
//             type="file"
//             style={{ display: "none" }}
//             ref={fileInputRef}
//             accept="image/*"
//             onChange={(event) => {
//               const file = event.target.files[0];
//               if (file && file.type.substring(0, 5) === "image") {
//                 setImage(file);
//               } else {
//                 setImage(null);
//               }
//             }}
//           /> */}
//           <input
//             type="file"
//             style={{ display: "none" }}
//             ref={fileInputRef}
//             accept="image/*"
//             onChange={handleImageChange}
//           />
//         </form>
//         {preview && (
//           <div className="flex flex-col my-4 gap-2">
//             <button
//               onClick={navigateToEditPost}
//               className=" bg-primary w-full text-lg text-base-100 rounded-3xl py-[10px] flex justify-center items-center gap-2 "
//             >
//               Next Step
//             </button>
//             <button
//               onClick={(event) => {
//                 event.preventDefault();
//                 fileInputRef.current.click();
//               }}
//               className=" bg-primary w-full text-lg text-base-100 rounded-3xl py-[10px] flex justify-center items-center gap-2 "
//             >
//               Edit
//             </button>
//           </div>
//         )}
//         <div className="flex justify-between">
//           <div className="flex items-center gap-4">
//             <h3 className="font-bold ">Gallery</h3>
//             <ArrowDownSvg />
//           </div>
//           <div className="flex items-center gap-4">
//             <GallerySvg
//               svgFillColor={
//                 theme === "dark" ? "fill-[#9E9E9E]" : "fill-[#212121]"
//               }
//             />
//             <CameraSvg
//               svgFillColor={
//                 theme === "dark" ? "fill-[#9E9E9E]" : "fill-[#212121]"
//               }
//             />
//           </div>
//         </div>

//         <div className="py-6">
//           <PostFakeGallery />
//         </div>
//       </section>
//     </>
//   );
// };

// export default NewPostPic;

import PostFakeGallery from "./PostFakeGallery";
import CameraSvg from "../SVG/CameraSvg";
import GallerySvg from "../SVG/GallerySvg";
import ArrowDownSvg from "../SVG/ArrowDownSvg";
import { useTheme } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import { useRef, useState, useEffect } from "react";

const NewPostPic = ({ setSelectedImage, preview, setPreview }) => {
  const { theme } = useTheme();
  const navigate = useNavigate();

  const fileInputRef = useRef();

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

  const navigateToEditPost = () => {
    navigate("/upload-detail");
  };

  return (
    <>
      <section className="p-6 pb-12">
        <form
          className={`h-[380px] bg-secondary rounded-[32px]  flex justify-center items-center my-6   ${
            preview ? "px-[0]" : ""
          }`}
        >
          <button
            className={`bg-primary w-full text-lg text-base-100 rounded-3xl py-[10px] flex justify-center items-center gap-2 mx-[55px] ${
              preview ? "hidden" : ""
            }`}
            onClick={(event) => {
              event.preventDefault();
              fileInputRef.current.click();
            }}
          >
            <span>
              <CameraSvg svgFillColor="fill-base-100" />
            </span>
            <span>Upload</span>
          </button>
          <img
            src={preview}
            className={
              preview ? "rounded-[32px] min-w-[100%] h-[100%] object-cover" : ""
            }
          />
          <input
            type="file"
            style={{ display: "none" }}
            ref={fileInputRef}
            accept="image/*"
            onChange={handleImageChange}
          />
        </form>
        {preview && (
          <div className="flex flex-col my-4 gap-2">
            <button
              onClick={navigateToEditPost}
              className=" bg-primary w-full text-lg text-base-100 rounded-3xl py-[10px] flex justify-center items-center gap-2 "
            >
              Next Step
            </button>
            <button
              onClick={(event) => {
                event.preventDefault();
                fileInputRef.current.click();
              }}
              className=" bg-primary w-full text-lg text-base-100 rounded-3xl py-[10px] flex justify-center items-center gap-2 "
            >
              Edit
            </button>
          </div>
        )}
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <h3 className="font-bold ">Gallery</h3>
            <ArrowDownSvg />
          </div>
          <div className="flex items-center gap-4">
            <GallerySvg
              svgFillColor={
                theme === "dark" ? "fill-[#9E9E9E]" : "fill-[#212121]"
              }
            />
            <CameraSvg
              svgFillColor={
                theme === "dark" ? "fill-[#9E9E9E]" : "fill-[#212121]"
              }
            />
          </div>
        </div>
        <div className="py-6">
          <PostFakeGallery />
        </div>
      </section>
    </>
  );
};

export default NewPostPic;
