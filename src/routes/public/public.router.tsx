import { AboutUsPage, ContactPage, Home, LoginPage } from "@/modules";

import { plantersRoute } from "./planters.route";

import { searchRoute } from "./search.route";

import type { RouteObject } from "react-router-dom";
import { BlockAuth } from "../block-auth.route";

export const publicRoute: RouteObject = {
  children: [
    {
      index: true,
      element: <Home />,
    },
    {
      path: "about-us",
      element: <AboutUsPage />,
    },
    {
      path: "contact-us",
      element: <ContactPage />,
    },
    plantersRoute,
    searchRoute,
    {
      element: <BlockAuth />,
      children: [
        {
          path: "login",
          element: <LoginPage />,
        },
      ],
    },
  ],
};
