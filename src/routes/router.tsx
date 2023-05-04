import { createBrowserRouter } from "react-router-dom";

import { DefaultLayout } from "@/layouts";
import { publicRouter } from "./public";
import { privateRouter } from "./private/private.route";

export const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [publicRouter, privateRouter],
  },
]);
