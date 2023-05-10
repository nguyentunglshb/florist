import { ProfilePage } from "@/modules";
import { RouteObject } from "react-router-dom";

export const profileRoute: RouteObject = {
  path: "profile",
  element: <ProfilePage />,
};
