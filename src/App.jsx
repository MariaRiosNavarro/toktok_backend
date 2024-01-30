import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Login from "./routes/SignInUpRoutes/Login";
import Register from "./routes/SignInUpRoutes/Register";
import Post from "./routes/Post";
import NewPost from "./routes/NewPostUploadRoutes/NewPost";
import NewPostDetails from "./routes/NewPostUploadRoutes/NewPostDetails";
import ProfileDetail from "./routes/ProfileRoutes/ProfileDetail";
import ProfileEdit from "./routes/ProfileRoutes/ProfileEdit";
// import Protector from "./routes/Protector/Protector";
import Search from "./routes/Search";
import Detail from "./routes/Detail";
import { GlobalProvider } from "./context/userContext";

function App() {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <Routes>
          {/* 1 Loading/Login&Register*/}
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>

          {/* ↓ --------------Protected Routes---------------------------↓ */}

          {/* <Route element={<Protector />}></Route> */}

          {/* 2 Home & Post*/}
          <Route path="/" element={<Home />}></Route>
          <Route path="/post/:slug" element={<Post />} />
          {/* 3 Search*/}
          <Route path="/search" element={<Search />} />
          {/* 4 Upload */}
          <Route path="/upload" element={<NewPost />} />
          <Route path="/upload-detail" element={<NewPostDetails />} />
          {/* 5 Profile*/}
          <Route path="/profile" element={<ProfileDetail />}></Route>
          <Route path="/edit" element={<ProfileEdit />}></Route>
          {/* 6 Detail/Other Accounts */}
          <Route path="/detail/:slug" element={<Detail />} />
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default App;
