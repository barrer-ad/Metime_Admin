import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();
export default function AuthPrivider(props) {
  const [auth, setAuth] = useState({});
  useEffect(() => {
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");
    if (email) {
      setAuth({
        token,
        email,
      });
    }
  }, []);
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {props.children}
    </AuthContext.Provider>
  );
}
