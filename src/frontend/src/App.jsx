import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Favorites from "./routes/Favorites";
import Login from "./routes/SignInUpRoutes/Login";
import Register from "./routes/SignInUpRoutes/Register";
import Post from "./routes/Post";
import NewPost from "./routes/NewPostUploadRoutes/NewPost";
import NewPostDetails from "./routes/NewPostUploadRoutes/NewPostDetails";
import ProfileDetail from "./routes/ProfileRoutes/ProfileDetail";
import ProfileEdit from "./routes/ProfileRoutes/ProfileEdit";
import Search from "./routes/Search";
import Detail from "./routes/Detail";
import { GlobalProvider } from "./context/userContext";
import { useState } from "react";
import SignUp from "./routes/SignInUpRoutes/SignUp";
import LoadingScreen from "./routes/LoadingScreen";
import LoginProtector from "./routes/Protector/LoginProtector";

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [preview, setPreview] = useState(null);
  return (
    <BrowserRouter>
      <GlobalProvider>
        <Routes>
          {/* 1 Loading/Login&Register*/}
          <Route path="/loading" element={<LoadingScreen />} />
          <Route path="/sign-up" element={<SignUp />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>

          {/* ↓ --------------USER ROUTES ---------------------------↓ */}

          <Route element={<LoginProtector />}>
            {/* 2 Home & Post*/}
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/post/:slug" element={<Post />} />
            {/* 3 Search*/}
            <Route path="/search" element={<Search />} />
            {/* 4 Upload */}
            <Route
              path="/upload"
              element={
                <NewPost
                  setSelectedImage={setSelectedImage}
                  preview={preview}
                  setPreview={setPreview}
                />
              }
            />
            <Route
              path="/upload-detail"
              element={
                <NewPostDetails
                  selectedImage={selectedImage}
                  preview={preview}
                  setPreview={setPreview}
                />
              }
            />
            {/* 5 Profile*/}
            <Route path="/profile" element={<ProfileDetail />}></Route>
            <Route path="/edit" element={<ProfileEdit />}></Route>
            {/* 6 Detail/Other Accounts */}
            <Route path="/detail/:userid" element={<Detail />} />
          </Route>
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default App;
