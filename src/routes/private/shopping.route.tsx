import { RouteObject } from "react-router-dom";

import { CartPage, CheckoutPage } from "@/modules";
import { ShoppingLayout } from "@/layouts";

export const shoppingRoute: RouteObject = {
  element: <ShoppingLayout />,
  children: [
    {
      element: <CartPage />,
      path: "/cart",
    },
    {
      element: <CheckoutPage />,
      path: "/checkout",
    },
  ],
};
