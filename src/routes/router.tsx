import { createBrowserRouter } from "react-router-dom";

import { DefaultLayout } from "@/layouts";
import { publicRoute } from "./public";
import { privateRouter } from "./private/private.route";

export const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [publicRoute, privateRouter],
  },
]);
