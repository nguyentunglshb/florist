import { AboutUsPage, ContactPage, Home } from "@/modules";

import { plantersRoute } from "./planters.route";

import { searchRoute } from "./search.route";

import type { RouteObject } from "react-router-dom";

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
	],
};
