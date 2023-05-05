import { RouteObject } from "react-router-dom";

import { CartPage, CheckoutPage } from "@/modules";
import { ShoppingLayout } from "@/layouts";
import { TrackingPage } from "@/modules/shopping/tracking";

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
    {
      element: <TrackingPage />,
      path: "/order-tracking",
    },
  ],
};
