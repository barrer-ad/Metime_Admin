import React, { useContext } from "react";
import Navbar from "./Components/Dashbord/Navbar";
import { AuthContext } from "./Components/Login/AuthContext";
import Login from "./Components/Login/Login";

function App() {
  const authContext = useContext(AuthContext);
  return (
    <div className="container">
      {authContext.auth.email ? <Navbar /> : <Login />}
    </div>
  );
}

export default App;
