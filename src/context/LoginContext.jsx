import React, { createContext, useState } from "react";
export const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function userLoggedIn() {
    setIsLoggedIn(true);
  }

  function userLoggedOut() {
    setIsLoggedIn(false);
  }

  return (
    <LoginContext.Provider value={{ isLoggedIn, userLoggedIn, userLoggedOut }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
