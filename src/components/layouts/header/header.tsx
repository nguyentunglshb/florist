import { IconLogo } from "@/assets/icons/logo";
import { HeaderMenu } from "./header-menu";
// import { HeaderPersonal } from "./header-personal";

export const Header = () => {
  return (
    <div className="w-full fixed z-10">
      <div className="max-w-screen-lg mx-auto flex items-center justify-between py-9">
        {/* logo */}
        <div>
          <IconLogo />
        </div>
        <HeaderMenu />
        {/* <HeaderPersonal /> */}
      </div>
    </div>
  );
};
