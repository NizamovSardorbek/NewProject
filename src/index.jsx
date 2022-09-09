import React from "react";
import ReactDOM from "react-dom/client";
import Fetch from "./Fetch";

import "./index.css";
import Login from "./Login";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Login/>
    <Fetch />
  </React.StrictMode>
);
