import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { RouterData } from "./RouterData";

export default function NavRouter() {
  return (
    <div>
      {RouterData.map((item) => (
        <NavLink to={item.path}>{item.title}</NavLink>
      ))}
      {/* <NavLink to="/home">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink> */}
      <Outlet />
    </div>
  );
}
