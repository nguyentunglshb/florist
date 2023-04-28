import { Outlet } from "react-router-dom";

import { Header } from "@/components";

export const DefaultLayout = () => {
  return (
    <div className="w-full">
      <Header />
      <Outlet />
    </div>
  );
};
