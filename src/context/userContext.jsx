import { createContext, useContext, useEffect, useState } from "react";

// const UserContext = createContext();
const ThemeContext = createContext();

// export const useLoginContext = () => useContext(UserContext);
export const useTheme = () => useContext(ThemeContext);

export const GlobalProvider = ({ children }) => {
  //   const [loginUser, setLoginUser] = useState(null);
  //   use theme from local storage if available or set light theme
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  //   useEffect(() => {
  //     async function getUser() {
  //       const response = await fetch(
  //         import.meta.env.VITE_BACKEND_URL + "richtige-api-pfad-unseren-Backend",
  //         {
  //           credentials: "include",
  //         }
  //       );
  //       if (response.ok) {
  //         setLoginUser(await response.json());
  //         console.log("--------------PROVIDER------JA");
  //       }
  //     }
  //     getUser();
  //   }, []);

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
      {/* <UserContext.Provider value={{ loginUser }}> */}
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
      {/* </UserContext.Provider> */}
    </>
  );
};
