import { getStoredAuth } from "@/helpers";
import { NavigationPath } from "@/models";
import { Navigate, Outlet } from "react-router-dom";

export const BlockAuth = () => {
  return getStoredAuth() ? <Navigate to={NavigationPath.HOME} /> : <Outlet />;
};
