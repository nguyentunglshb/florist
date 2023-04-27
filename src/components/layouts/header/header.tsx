import { HeaderMenu } from "./header-menu";
import { HeaderPersonal } from "./header-personal";

export const Header = () => {
  return (
    <div className="w-full max-w-[1444px] mx-auto flex items-center justify-between py-14">
      {/* logo */}
      <div>
        <p className="text-3xl text-[#171616]">Flower Go</p>
      </div>
      <HeaderMenu />
      <HeaderPersonal />
    </div>
  );
};
