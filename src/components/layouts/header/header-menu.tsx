import { NavLink } from "react-router-dom";

import { NavigationPath } from "@/models";
import { HeaderItem } from ".";
import { ButtonWhiteDefault } from "@/components";

const headerMenu: HeaderItem[] = [
  {
    label: "Home",
    path: NavigationPath.HOME,
  },
  {
    label: "About Us",
    path: NavigationPath.ABOUT_US,
  },
  {
    label: "Planters",
    path: NavigationPath.PLANTERS,
  },
  {
    label: "Contact",
    path: NavigationPath.CONTACT,
  },
];

export const HeaderMenu = () => {
  return (
    <div className="flex space-x-14 items-center">
      {headerMenu.map(({ label, path }) => {
        return (
          <div key={path}>
            <NavLink
              to={path}
              className={({ isActive }) =>
                isActive ? "block border-b border-white border-solid" : "block"
              }
            >
              <p className="font-medium text-white text-lg py-1">{label}</p>
            </NavLink>
          </div>
        );
      })}
      <ButtonWhiteDefault className="px-12">
        <p className="text-white font-bold text-base">Call us</p>
      </ButtonWhiteDefault>
    </div>
  );
};
