import { createBrowserRouter } from "react-router-dom";

import { DefaultLayout } from "@/layouts";
import { publicRouter } from "./public";

export const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [publicRouter],
  },
]);
