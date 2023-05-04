import { Outlet } from "react-router-dom";

import { Footer, Header } from "@/components";

export const DefaultLayout = () => {
	return (
		<div className="w-full">
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
};
