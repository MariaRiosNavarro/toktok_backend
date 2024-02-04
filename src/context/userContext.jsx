import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);

export const GlobalProvider = ({ children }) => {
  //   use theme from local storage if available or set light theme
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  // update state on toggle
  const toggleTheme = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  // set theme state in localstorage on mount & also update localstorage on state change
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    // add custom data-theme attribute to html tag required to update theme using DaisyUI
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </>
  );
};

// -------NEUE VERSION VORBEREITET mit den /api/users/actual rute unten, damit die user persist

// import { createContext, useContext, useEffect, useState } from "react";

// const UserContext = createContext();
// export const useUserContext = () => useContext(UserContext);

// const ThemeContext = createContext();
// export const useTheme = () => useContext(ThemeContext);

// export const GlobalProvider = ({ children }) => {
//   const [loginUser, setLoginUser] = useState(null);
//   //   use theme from local storage if available or set light theme
//   const [theme, setTheme] = useState(
//     localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
//   );
//   const [loadingUser, setLoadingUser] = useState(true);

//   const loginUserFunction = async (userData) => {
//     try {
//       const response = await fetch(
//         import.meta.env.VITE_BACKEND_URL + "/api/auth/login",
//         {
//           method: "POST",
//           headers: { "content-type": "application/json" },
//           body: JSON.stringify(userData),
//           credentials: "include",
//         }
//       );

//       if (response.ok) {
//         const backendJsonResponse = await response.json();
//         setLoginUser(backendJsonResponse.data);
//         console.log(
//           "backendJsonResponse-------------------------",
//           backendJsonResponse
//         );
//         return true;
//       } else {
//         console.error("Authentication failed:", response.status);
//         return false;
//       }
//     } catch (error) {
//       console.error("Error during authentication:", error);
//       return false;
//     }
//   };

//   useEffect(() => {
//     const fetchCurrentUser = async () => {
//       try {
//         const response = await fetch(
//           import.meta.env.VITE_BACKEND_URL + "/api/users/actual",
//           {
//             credentials: "include",
//           }
//         );
//         if (response.ok) {
//           const userJson = await response.json();
//           setLoginUser(userJson);
//           setLoadingUser(false);
//           console.log("Current user loaded:", userJson);
//         } else {
//           setLoadingUser(false);
//         }
//       } catch (error) {
//         console.error("Error fetching current user:", error);
//         setLoadingUser(false);
//       }
//     };

//     fetchCurrentUser();
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("user", JSON.stringify(loginUser));
//   }, [loginUser]);

//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) {
//       setLoginUser(JSON.parse(storedUser));
//     }
//   }, []);

//   const logOutUserFunction = () => {
//     setLoginUser(null);
//     localStorage.removeItem("user");
//   };

// // update state on toggle
//   const toggleTheme = (e) => {
//     if (e.target.checked) {
//       setTheme("dark");
//     } else {
//       setTheme("light");
//     }
//   };

//    // set theme state in localstorage on mount & also update localstorage on state change
//   useEffect(() => {
//     localStorage.setItem("theme", theme);
//     const localTheme = localStorage.getItem("theme");
//     // add custom data-theme attribute to html tag required to update theme using DaisyUI
//     document.querySelector("html").setAttribute("data-theme", localTheme);
//   }, [theme]);

//   return (
//     <>
//       {!loadingUser ? (
//         <UserContext.Provider
//           value={{ loginUser, loginUserFunction, logOutUserFunction }}
//         >
//           <ThemeContext.Provider value={{ theme, toggleTheme }}>
//             {children}
//           </ThemeContext.Provider>
//         </UserContext.Provider>
//       ) : (
//         <div>Loading...</div>
//       )}
//     </>
//   );
// };
