import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export const LoginUserProvider = ({ children }) => {
  const [loginUser, setLoginUser] = useState(null);
  useEffect(() => {
    async function getUser() {
      const response = await fetch(
        import.meta.env.VITE_BACKEND_URL + "/api/users/login-user",
        {
          credentials: "include",
        }
      );
      if (response.ok) {
        let json = await response.json();

        console.log("--------------user------JA", json);
        setLoginUser(json);
      }
    }
    getUser();
  }, []);

  return (
    <>
      <UserContext.Provider value={{ loginUser }}>
        {children}
      </UserContext.Provider>
    </>
  );
};
