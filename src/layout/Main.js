import React from "react";
import { Link, Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="">
      <Link className="" to="/register">
        Register
      </Link>
      <Link className="" to="/login">
        Login
      </Link>
      <Outlet />
    </div>
  );
};

export default Main;
