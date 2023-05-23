import { IconFacebook, IconInsta, IconTwitter } from "@/assets";
import { NavigationPath } from "@/models";
import { Link } from "react-router-dom";

export const Social = () => {
  return (
    <div className="w-full h-[370px] flex flex-col items-center justify-center">
      <p className="text-white text-3xl text-center font-black">
        Feel free to contact us
      </p>
      <div className="flex space-x-20 py-14">
        <IconInsta />
        <IconFacebook />
        <IconTwitter />
      </div>
      <div className="flex space-x-12 pb-5">
        <Link
          to={NavigationPath.HOME}
          className="text-white opacity-80 font-semibold"
        >
          Home
        </Link>
        <Link
          to={NavigationPath.ABOUT_US}
          className="text-white opacity-80 font-semibold"
        >
          About us
        </Link>
        <Link
          to={NavigationPath.PLANTERS}
          className="text-white opacity-80 font-semibold"
        >
          Plants
        </Link>
        <p className="text-white opacity-80 font-semibold">Delivery</p>
        <p className="text-white opacity-80 font-semibold">Blog</p>
        <Link
          to={NavigationPath.ABOUT_US}
          className="text-white opacity-80 font-semibold"
        >
          Contact us
        </Link>
      </div>
    </div>
  );
};
