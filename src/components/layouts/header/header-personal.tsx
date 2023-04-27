import { Link } from "react-router-dom";

import { HeaderItem } from ".";
import { NavigationPath } from "@/models";

import { IconCart, IconHeart, IconProfile } from "@/assets";

const headerPersonalMenu: HeaderItem[] = [
  {
    label: <IconHeart />,
    path: NavigationPath.FAVOURITE,
  },
  {
    label: <IconProfile />,
    path: NavigationPath.PERSONAL,
  },
  {
    label: <IconCart />,
    path: NavigationPath.CART,
  },
];

export const HeaderPersonal = () => {
  return (
    <div className="flex">
      {headerPersonalMenu.map(({ label, path }) => {
        return (
          <div key={path} className="px-3.5">
            <Link to={path}>{label}</Link>
          </div>
        );
      })}
    </div>
  );
};
