import React from "react";
import { Navigate } from "react-router-dom";
import isAuth from "../utilities/UserAuth";

function Authorized({ children }) {
  if (isAuth()) {
    return children;
  } else {
    return <Navigate to="/login" replace />;
  }
}

export default Authorized;
