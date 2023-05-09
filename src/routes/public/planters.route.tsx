import { FlowerDetailPage, FlowersPage } from "@/modules";

import type { RouteObject } from "react-router-dom";

export const plantersRoute: RouteObject = {
  path: "planters",
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
