import { Outlet } from "react-router-dom";

import { Footer, Header, Navbar } from "@/components";
import { ScrollToTop } from "@/hocs";

export const DefaultLayout = () => {
	return (
		<ScrollToTop>
			<div className="w-full">
				<Header />
				<Navbar />
				<Outlet />
				<Footer />
			</div>
		</ScrollToTop>
	);
};
