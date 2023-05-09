import { bgReceiveNotification } from "@/assets";
import { Outlet } from "react-router-dom";

export const ShoppingLayout = () => {
  return (
    <div>
      <img src={bgReceiveNotification} alt="" />
      <Outlet />
    </div>
  );
};
