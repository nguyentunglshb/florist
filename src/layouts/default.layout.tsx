import { Outlet } from "react-router-dom";

import { Footer, Header, Navbar } from "@/components";

export const DefaultLayout = () => {
  return (
    <div className="w-full">
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
