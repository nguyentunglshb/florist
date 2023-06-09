import { Link } from "react-router-dom";

import { IconCart, IconHeart, IconProfile, IconSearch } from "@/assets";
import { NavigationPath } from "@/models";
import { getStoredAuth } from "@/helpers";

export const Navbar = () => {
  const accessToken = getStoredAuth();

  return (
    <div className="fixed left-0 top-1/3 p-2 z-50 flex flex-col space-y-2">
      {accessToken ? (
        <>
          <Link
            to={NavigationPath.PROFILE}
            className="rounded-full p-2 bg-[rgba(255,255,255,0.2)] flex items-center justify-center"
          >
            <div className="hover:-translate-y-1 transition-all">
              <IconProfile />
            </div>
          </Link>
          <Link
            to={NavigationPath.CART}
            className="rounded-full p-2 bg-[rgba(255,255,255,0.2)] flex items-center justify-center hover:"
          >
            <div className="hover:-translate-y-1 transition-all">
              <IconCart />
            </div>
          </Link>
          <Link
            to={NavigationPath.WISHLIST}
            className="rounded-full p-2 bg-[rgba(255,255,255,0.2)] flex items-center justify-center"
          >
            <div className="hover:-translate-y-1 transition-all">
              <IconHeart />
            </div>
          </Link>
        </>
      ) : (
        <>
          {/* <div>
            <div className="rounded-full p-2 bg-[rgba(255,255,255,0.2)] flex items-center justify-center cursor-pointer mt-2">
              <div className="hover:-translate-y-1 transition-all">
                <IconProfile />
              </div>
            </div>
            <div className="rounded-full p-2 bg-[rgba(255,255,255,0.2)] flex items-center justify-center cursor-pointer mt-2">
              <div className="hover:-translate-y-1 transition-all">
                <IconCart />
              </div>
            </div>
            <div className="rounded-full p-2 bg-[rgba(255,255,255,0.2)] flex items-center justify-center cursor-pointer mt-2">
              <div className="hover:-translate-y-1 transition-all">
                <IconHeart />
              </div>
            </div>
          </div>

          <Link
            to={NavigationPath.SEARCH}
            className="rounded-full p-2 bg-[rgba(255,255,255,0.2)] flex items-center justify-center"
          >
            <div className="hover:-translate-y-1 transition-all">
              <IconSearch />
            </div>
          </Link> */}
          <Link
            to={NavigationPath.LOGIN}
            className="block p-4 rounded-xl bg-primary text-white font-medium"
          >
            <p>Sign in or Create an account now?</p>
          </Link>
        </>
      )}
      <Link
        to={NavigationPath.SEARCH}
        className="rounded-full p-2 bg-[rgba(255,255,255,0.2)] flex items-center justify-center"
      >
        <div className="hover:-translate-y-1 transition-all">
          <IconSearch />
        </div>
      </Link>
    </div>
  );
};
