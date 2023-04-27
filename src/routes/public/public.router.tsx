import { Home } from "@/modules";

import { flowerRouter } from "./flower.router";

import type { RouteObject } from "react-router-dom";

export const publicRouter: RouteObject = {
  children: [
    {
      index: true,
      element: <Home />,
    },
    flowerRouter,
  ],
};
