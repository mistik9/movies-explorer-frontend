import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isLoggedIn, element: children  }) => {

  return (
    isLoggedIn ? children : <Navigate to="/" />
)}

export default ProtectedRoute;