import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AuthPrivider from "./Components/Login/AuthContext";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <AuthPrivider>
      <App />
    </AuthPrivider>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
