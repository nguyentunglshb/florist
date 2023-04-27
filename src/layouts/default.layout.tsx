import { Outlet } from "react-router-dom";

import { Header } from "@/components";
import { bgBottom, bgRight } from "@/assets";

export const DefaultLayout = () => {
  return (
    <div className="w-full">
      <Header />
      <Outlet />
      <img src={bgBottom} className="fixed left-0 bottom-0 w-[266px]" />
      <img src={bgRight} className="fixed right-0 top-[157px] w-[247px]" />
    </div>
  );
};
