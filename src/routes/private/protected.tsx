import { Navigate, Outlet } from "react-router-dom";

export const Protected = () => {
  const isLoggedIn = true;

  return isLoggedIn ? <Outlet /> : <Navigate to={"/"} />;
};
