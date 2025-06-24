import React, { useContext } from "react";
import { AuthContext } from "../context/Authcontext";
import { Navigate, useLocation } from "react-router";

const PrivetRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <span className="loading loading-bars loading-xl"></span>;
  }

  if (!user) {
    return <Navigate to={"/login"} state={location.pathname}></Navigate>;
  }
  return children;
};

export default PrivetRoute;
