import React, { useContext, useState } from "react";
import "../Login/Login.css";
import { AuthContext } from "./AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const authContext = useContext(AuthContext);

  function Form(e) {
    e.preventDefault();
    //send api
    if (password === "123456") {
      const token = "azerty";
      localStorage.setItem("token", token);
      localStorage.setItem("email", email);
      authContext.setAuth({ token, email });
    } else {
      alert("error");
    }
  }

  return (
    <div className="container mt-5 mb-5">
      <div className="d-flex flex row g-0">
        <div className="col-md-6 mt-3">
          <div className="card card1 p-3">
            <div className="d-flex flex-column login">
              <img src="./img/Group 11940 1.png" height="44" width="139" />
              <span className="mt-3">Log in</span>
            </div>
            <form>
              <div className="input-field d-flex flex-column mt-3">
                <span>Email</span>
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email@example.com"
                />
                <span className="mt-3">Password</span>
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Your Password"
                />
                <button
                  className="mt-4 d-flex justify-content-center align-items-center btn-log"
                  onClick={Form}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-6 mt-3">
          <div className="card2 d-none d-lg-block d-sm-none">
            <div className="image">
              <img src="../img/unsplash_3nBzt3Jdeh4.png" className="w-100" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
