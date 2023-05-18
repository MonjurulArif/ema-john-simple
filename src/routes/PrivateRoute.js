import React, { useContext } from "react";
import { AuthContext } from "../context/UserContext";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    console.log("Loading found");
    return <div>Loading...</div>;
  }

  if (user && user.uid) {
    return children;
  }
  // from: inventory or order to login
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
