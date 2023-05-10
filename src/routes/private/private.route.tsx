import { RouteObject } from "react-router-dom";

import { Protected } from "./protected";
import { shoppingRoute } from "./shopping.route";
import { profileRoute } from "./profile.route";

export const privateRouter: RouteObject = {
  element: <Protected />,
  children: [shoppingRoute, profileRoute],
};
