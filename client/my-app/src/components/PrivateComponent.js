import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateComponent = () => {
  const auth = localStorage.getItem("token");

  return auth ? <Outlet /> : <Navigate to="signup" />;
};

export default PrivateComponent;
