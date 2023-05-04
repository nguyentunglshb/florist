import { bgShopping } from "@/assets";
import { Outlet } from "react-router-dom";

export const ShoppingLayout = () => {
  return (
    <div>
      <img src={bgShopping} alt="" />
      <Outlet />
    </div>
  );
};
