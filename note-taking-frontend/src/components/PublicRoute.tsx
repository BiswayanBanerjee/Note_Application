import React from "react";
import { Navigate } from "react-router-dom";

interface PublicRouteProps {
  element: React.ReactElement;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ element }) => {
  const isAuthenticated = !!localStorage.getItem("token"); // Check if the user is authenticated

  return isAuthenticated ? <Navigate to="/notes" /> : element;
};

export default PublicRoute;