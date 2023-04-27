import { FlowerDetailPage, FlowersPage } from "@/modules";

import type { RouteObject } from "react-router-dom";

export const flowerRouter: RouteObject = {
  path: "flowers",
  children: [
    {
      index: true,
      element: <FlowersPage />,
    },
    {
      path: ":id",
      element: <FlowerDetailPage />,
    },
  ],
};
