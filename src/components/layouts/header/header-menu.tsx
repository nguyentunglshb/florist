import { NavLink } from "react-router-dom";

import { NavigationPath } from "@/models";
import { HeaderItem } from ".";

const headerMenu: HeaderItem[] = [
  {
    label: "Home",
    path: NavigationPath.HOME,
  },
  {
    label: "Red rose",
    path: NavigationPath.RED_ROSE,
  },
  {
    label: "Lotus",
    path: NavigationPath.LOTUS,
  },
  {
    label: "Jasmine",
    path: NavigationPath.JASMINE,
  },
  {
    label: "Contact",
    path: NavigationPath.CONTACT,
  },
];

export const HeaderMenu = () => {
  return (
    <div className="flex">
      {headerMenu.map(({ label, path }) => {
        return (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              isActive
                ? "block opacity-100 font-medium"
                : "block opacity-50 font-normal"
            }
          >
            <p className="text-[#515151] text-lg px-7">{label}</p>
          </NavLink>
        );
      })}
    </div>
  );
};
