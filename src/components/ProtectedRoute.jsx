import React from "react";
import { Navigate } from "react-router";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading)
    return <div className="text-center py-10 text-white">Loading...</div>;
  return user ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
