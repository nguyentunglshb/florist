import { Link } from "react-router-dom";

import { IconLogo } from "@/assets/icons/logo";
import { HeaderMenu } from "./header-menu";
import { NavigationPath } from "@/models";
// import { HeaderPersonal } from "./header-personal";

export const Header = () => {
  return (
    <div className="w-full fixed z-10">
      <div className="max-w-screen-lg mx-auto flex items-center justify-between py-9">
        {/* logo */}
        <Link to={NavigationPath.HOME}>
          <IconLogo />
        </Link>
        <HeaderMenu />
        {/* <HeaderPersonal /> */}
      </div>
    </div>
  );
};
