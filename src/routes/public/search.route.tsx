import { SearchPage, SearchResult } from "@/modules";

import type { RouteObject } from "react-router-dom";

export const searchRoute: RouteObject = {
  path: "search",
  children: [
    {
      path: "",
      element: <SearchPage />,
      children: [
        {
          path: ":searchTerm",
          element: <SearchResult />,
        },
      ],
    },
  ],
};
