import React from "react";
import { getAuth } from "firebase/auth";
import app from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";

const auth = getAuth(app);

const RequireAuth = ({ children }) => {
  //children obviously in second braket
  const [user] = useAuthState(auth);
  let location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default RequireAuth;
