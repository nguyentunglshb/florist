import { Navigate, Outlet } from "react-router-dom";

import { getStoredAuth } from "@/helpers";

export const Protected = () => {
  return getStoredAuth() ? <Outlet /> : <Navigate to={"/"} />;
};
