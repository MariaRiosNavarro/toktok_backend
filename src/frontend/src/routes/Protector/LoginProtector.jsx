// import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { LoginUserProvider } from "../../context/loginContext";

const LoginProtector = () => {
  // const navigate = useNavigate();
  // const [authorized, setAuthorized] = useState(false);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const checkBackendJWTToken = async () => {
  //     try {
  //       const response = await fetch(
  //         import.meta.env.VITE_BACKEND_URL + "/api/auth/check",
  //         {
  //           credentials: "include",
  //         }
  //       );

  //       const json = await response.json();
  //       const role = json.role;

  //       if (response.ok && role === "admin") {
  //         setAuthorized(true);
  //         console.log(role);
  //       }
  //       setLoading(false);
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   };
  //   checkBackendJWTToken();
  // }, []);

  return (
    <>
      <LoginUserProvider>
        <Outlet />
      </LoginUserProvider>
    </>
  );
};

export default LoginProtector;
